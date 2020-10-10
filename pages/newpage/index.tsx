import Header from '@component/Head';
import { GetStaticProps, NextPage } from 'next';
import { fethApi } from 'api/hello';
import useSwr from 'swr';
import { data } from '@dummy/produk';

interface ProductsData {
  id: string;
  title: string;
  description: string;
  category_id: string;
  imageUrl: string;
}

interface Props {
  produk: ProductsData[];
  loading: boolean;
}

const getProduk = async (key = {}, path) => {
  try {
    const { data } = await fethApi<{ data: ProductsData[] }>(path);
    return data;
  } catch (err) {
    throw err;
  }
};

const NewPages: NextPage<Props> = ({ produk }) => {
  const { data, error } = useSwr(['getProduk', 'product'], getProduk);
  if (error) return <p>loading...</p>;
  return (
    <>
      <Header title="my new pages" />
      {data?.map((val) => (
        <div key={val.id}>
          <h1>{val.title}</h1>
          <img src={val.imageUrl} alt={val.title} />
        </div>
      ))}
    </>
  );
};

export default NewPages;

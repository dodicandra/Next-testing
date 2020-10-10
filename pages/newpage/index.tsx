import Header from '@component/Head';
import { GetStaticProps, NextPage } from 'next';
import { fethApi } from 'api/hello';
import { useQuery } from 'react-query';
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

const getProduk = async () => {
  try {
    const { data } = await fethApi<{ data: ProductsData[] }>('product');
    return data;
  } catch (err) {
    console.log(err);
  }
};

const NewPages: NextPage<Props> = ({ produk }) => {
  const { data, isLoading } = useQuery(['getProduk'], getProduk);
  if (isLoading) return <p>loading...</p>;
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  return { props: { produk: data } };
};

export default NewPages;

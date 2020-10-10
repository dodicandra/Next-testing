import Header from '@component/Head';
import { GetStaticProps, NextPage } from 'next';
import { fethApi } from 'pages/api/hello';
import { useQuery } from 'react-query';

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
  const { data, isLoading } = useQuery(['getProduk'], getProduk, { initialData: produk });
  if (isLoading) return <p>loading...</p>;
  return (
    <>
      <Header title={produk[0].title} />
      {data.map((val) => (
        <div key={val.id}>
          <h1>{val.title}</h1>
          <img src={val.imageUrl} alt={val.title} />
        </div>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await getProduk();
  return { props: { produk: data } };
};

export default NewPages;
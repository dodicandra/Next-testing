import Header from '@component/Head';
import { fethApi } from 'api/hello';
import { GetServerSideProps, NextPage } from 'next';

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

const NewPages: NextPage<Props> = ({ produk }) => {
  return (
    <>
      <Header title={produk[0].title} icon={produk[0].imageUrl} />
      {produk?.map((val) => (
        <div key={val.id}>
          <h1>{val.title}</h1>
          <img src={val.imageUrl} alt={val.title} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{ produk: ProductsData[] }> = async () => {
  const { data } = await fethApi<{ data: ProductsData[] }>('product');
  return {
    props: {
      produk: data,
    },
  };
};

export default NewPages;

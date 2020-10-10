import Header from '@component/Head';
import { fethApi } from 'api/hello';
import { GetStaticProps, NextPage } from 'next';

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

export const getStaticProps: GetStaticProps<{ produk: ProductsData[] }> = async ({ params }) => {
  const { data } = await fethApi<{ data: ProductsData[] }>(
    'http://localhost:3000/api/newpage',
    'GET',
    {
      urlBase: true,
    }
  );
  return {
    props: {
      produk: data,
    },
  };
};

export default NewPages;

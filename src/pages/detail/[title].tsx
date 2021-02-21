import { GetServerSideProps, NextPage } from 'next';
import { fethApi } from 'src/service/hello';

import Header from '@component/Head';

interface ProductsData {
  id: string;
  title: string;
  description: string;
  category_id: string;
  imageUrl: string;
}

interface Props {
  produk: ProductsData;
  loading: boolean;
}

const NewPages: NextPage<Props> = ({ produk }) => {
  return (
    <>
      <Header title={produk.title} icon={produk.imageUrl} content={produk.description} titleContent={produk.title} />
      <div>
        <h1>{produk.title}</h1>
        <img src={produk.imageUrl} alt={produk.title} style={{ width: 250, height: 250 }} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{ produk: ProductsData | object }, { title: string }> = async ({
  params,
}) => {
  const { data } = await fethApi<{ data: ProductsData }>(`product/title/${params.title}`, 'GET', { urlBase: true });
  return {
    props: { produk: data ?? {} },
  };
};

export default NewPages;

import { useEffect } from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    console.log(userAgent);
  }, []);

  if (router.isFallback) {
    return <h2>loading...</h2>;
  }

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

export const getStaticPaths: GetStaticPaths<{ title: string }> = async () => {
  const { data } = await fethApi<{ data: ProductsData[] }>('product', 'GET', { urlBase: true });
  const paths = data.map((val) => ({ params: { title: val.title.split(' ').join('-') } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ produk: ProductsData | object }, { title: string }> = async ({
  params,
  ...ctx
}) => {
  const { data } = await fethApi<{ data: ProductsData }>(`product/title/${params.title}`, 'GET', { urlBase: true });
  return {
    props: { produk: data ?? {} },
    revalidate: 15,
  };
};

export default NewPages;

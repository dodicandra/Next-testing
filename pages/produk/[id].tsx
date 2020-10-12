import Header from '@component/Head';
import { fethApi } from '@service/hello';
import { GetServerSideProps, NextPage } from 'next';

interface Shared {
  bisnisprodukfoto: string;
  bisnisproduknama: string;
  bisnisprodukharga: string;
  bisnisprodukpromo: string;
  bisnisusertokoalamat: string;
  bisnisuserajakan: string;
}

interface Props {
  produk: Shared;
  loading: boolean;
}

const Produk: NextPage<Props> = ({ produk }) => {
  if (!produk) return <p>error</p>;
  return (
    <>
      <Header title={produk.bisnisproduknama} icon={produk.bisnisprodukfoto} />
      <div>
        <h1>{produk.bisnisproduknama}</h1>
        <img src={produk.bisnisprodukfoto} alt={produk.bisnisproduknama} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const data = await fethApi<{ data: Shared }>(`/produk?bisnisproduknama=${query.id}`, 'GET', {
      urlBase: false,
    });
    return {
      props: {
        produk: data,
      },
    };
  } catch (err) {
    return null;
  }
};

export default Produk;

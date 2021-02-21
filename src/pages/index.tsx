import React from 'react';

import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from '@component/Head';
import ProdukContainer, { ProductsData } from '@component/Produk';
import { fethApi } from '@service/hello';

import styles from '../../styles/Home.module.scss';

type Props = {
  produk: ProductsData[];
};

const Home: NextPage<Props> = ({ produk }) => {
  const { query } = useRouter();
  const id = query.id;

  return (
    <div className={styles.container}>
      <Header title="first next app" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href={`/produk/${id}`}>
            <div className={styles.card}>
              <h3>Documentation Lotek amay</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>

          <Link href={`/newpage`}>
            <div className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </Link>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <div>
        <ProdukContainer produk={produk} />
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ produk: ProductsData[] }> = async () => {
  const { data } = await fethApi<{ data: ProductsData[] }>('product', 'GET', { urlBase: true });
  return {
    props: {
      produk: data,
    },
  };
};

export default Home;

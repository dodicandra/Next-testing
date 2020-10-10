import Head from 'next/head';

const Header = ({ title, icon }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta
        name="description"
        content="Bons startup pembantu UMKM dengan skala menengah pada level hyper-local market"
      />

      <link rel="icon" href={icon} />
      <meta property="og:title" content="aplikasi pertama nextjs" />
      <meta property="og:image" content={icon} />
      <meta property="og:url" content="https://bons.co.id" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="ini aplikasi pertaman next js saya" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={icon} />
    </Head>
  );
};

export default Header;

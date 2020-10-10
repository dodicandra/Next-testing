import Head from 'next/head';

interface Props {
  icon?: string;
  title: string;
}

const Header = ({ title, icon }: Props) => {
  return (
    <Head>
      <title>{title}</title>

      <meta
        name="description"
        content="Bons startup pembantu UMKM dengan skala menengah pada level hyper-local market"
      />

      <link rel="icon" href={icon ?? '/favicon.ico'} />
      <meta property="og:title" content="aplikasi pertama nextjs" />
      <meta property="og:image" content={icon ?? '/favicon.ico'} />
      <meta property="og:url" content="https://bons.co.id" />
      <meta property="og:type" content="article" />
      <meta property="og:description" content="ini aplikasi pertaman next js saya" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={icon ?? '/favicon.ico'} />
    </Head>
  );
};

export default Header;

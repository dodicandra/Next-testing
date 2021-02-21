import Link from 'next/link';

export interface ProductsData {
  id: string;
  title: string;
  description: string;
  category_id: string;
  imageUrl: string;
}

interface Props {
  produk: ProductsData[];
  loading?: boolean;
}

const ProdukContainer: React.FC<Props> = ({ produk }) => {
  return (
    <>
      {produk?.map((val) => {
        let links = val.title.split(' ').join('-');
        return (
          <Link key={val.id} href={`detail/${links}`}>
            <div>
              <h1>{val.title}</h1>
              <img style={{ height: 100, width: 100 }} src={val.imageUrl} alt={val.title} />
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProdukContainer;

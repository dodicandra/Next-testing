import { fethApi } from 'api/hello';
import { NextApiRequest, NextApiResponse } from 'next';

interface ProductsData {
  id: string;
  title: string;
  description: string;
  category_id: string;
  imageUrl: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await fethApi<{ data: ProductsData[] }>('product');
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
}

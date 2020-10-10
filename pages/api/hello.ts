// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: any, res: any) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

type Method = 'GET' | 'POST';

type Body =
  | string
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null;

export async function fethApi<T = any>(
  baseUrl: string,
  method: Method = 'GET',
  body?: Body
): Promise<T> {
  const result = await fetch('https://api.admin-server-bons.com/api/v1/' + baseUrl, {
    method: method,
    body,
    headers: {
      'X-X-X-bons-api': 'bons-api',
    },
  });

  const response = await result.json();

  return response;
}

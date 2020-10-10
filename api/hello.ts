// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  const url =
    process.env.NODE_ENV === 'development'
      ? 'https://api.admin-server-bons.com/api/v1/'
      : process.env.NEXT_PUBLIC_API;

  const result = await fetch(url + baseUrl, {
    method: method,
    body,
    headers: {
      'X-X-X-bons-api': 'bons-api',
    },
  });

  const response = await result.json();

  return response;
}

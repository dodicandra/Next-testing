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

type Option = {
  urlBase?: boolean;
  deplink?: boolean;
};

export async function fethApi<T = any>(
  baseUrl: string,
  method: Method = 'GET',
  option: Option,
  body?: Body
): Promise<T> {
  const url = process.env.NEXT_PUBLIC_API;

  const base = url + baseUrl;

  const deep = process.env.NEXT_PUBLIC_API_DEEP + baseUrl;

  const result = await fetch(option.urlBase ? base : deep, {
    method: method,
    body,
    headers: {
      'X-X-X-bons-api': 'bons-api',
    },
  });

  const response = await result.json();

  return response;
}

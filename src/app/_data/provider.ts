type providerConfig = {
  path: string,
  method: string,
  headers?: Record<string, any>,
  body?: Record<string, any>
};

const baseHeaders = {};

export default async function provider (config: providerConfig) {
  const { path, method, headers, body } = config;
  console.log('Calling: ', `/api/${path}`);

  const response = await fetch(`/api/${path}`, {
    method,
    headers: { ...baseHeaders, ...(headers && headers) },
    body: JSON.stringify(body)
  });
  return await response.json();
};

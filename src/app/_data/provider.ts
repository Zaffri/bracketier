type providerConfig = {
  path: string;
  method: string;
  headers?: Record<string, any>;
  body?: Record<string, any>;
  signal: AbortSignal;
};

const baseHeaders = {};

export default async function provider (config: providerConfig) {
  const { path, method, headers, body, signal } = config;
  console.log('Calling: ', `/api${path}`);

  const response = await fetch(`/api${path}`, {
    method,
    headers: { ...baseHeaders, ...(headers && headers) },
    body: JSON.stringify(body),
    signal
  });
  
  const jsonResponse = await response.json();

  if (response.status < 300 && response.status >= 200) {
    return jsonResponse;
  }
  throw new Error(jsonResponse);
};

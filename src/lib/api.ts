export const fetchConfig = {
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
  previewParams: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
    },
  },
};

export const fetchGraphQL = async <Data, Variables extends { preview?: boolean | null }>(
  query: string,
  variables?: Variables,
  options?: RequestInit['headers'],
): Promise<Data> => {
  const res = await fetch(fetchConfig.endpoint as string, {
    method: 'POST',
    ...options,
    ...(variables?.preview ? fetchConfig.previewParams : fetchConfig.params),
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  if (json.errors) {
    const { message } = json.errors[0];

    throw new Error(message);
  }

  return json.data;
};

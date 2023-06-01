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

export async function fetchGraphQL(
  query: string,
  preview: boolean | undefined = false,
  options?: RequestInit['headers'],
) {
  const res = await fetch(fetchConfig.endpoint as string, {
    method: 'POST',
    ...options,
    ...(preview ? fetchConfig.previewParams : fetchConfig.params),
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  if (json.errors) {
    const { message } = json.errors[0];

    throw new Error(message);
  }

  return json.data;
}

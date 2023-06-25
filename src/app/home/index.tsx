import { homeFragment } from './home.fragment';
import styles from './home.module.scss';

import Button from '@/components/Atoms/Button';
import { fetchGraphQL } from '@/lib/api';

interface Variables {
  id: string;
}

interface Responce {
  page: {
    sys: {
      id: string;
    };
  };
}

export default async function Home() {
  const data = await fetchGraphQL<Responce, Variables>({
    query: `
    query pageEntryQuery($id: String!) {
      page(id: $id) {
        ...page
      }
    }
  `,
    fragments: homeFragment,
    variables: {
      id: '3t7Iub6Arm23Cn7wWkIJTd',
    },
  });

  return (
    <main className={styles.main}>
      <Button size="Small">{data?.page?.sys?.id}</Button>
      <Button size="Big" style="Outline">
        {data?.page?.sys?.id}
      </Button>
      <Button size="Regular" color="White" style="Outline">
        {data?.page?.sys?.id}
      </Button>
    </main>
  );
}

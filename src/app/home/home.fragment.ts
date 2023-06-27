export const homeFragment = `fragment page on Page {
  sys {
    id
  }
  topSectionCollection {
    items{
      __typename
      sys{
        id
      }
    }
  }
}`;

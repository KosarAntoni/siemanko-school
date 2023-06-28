export const duplexFragment = `fragment DuplexFragment on ComponentDuplex {
  sys {
    id
  }
  image {
    description
    url
  }
  imagePosition
  headline
  description {
    json
  }
  button {
    ...ButtonFragment
  }
}`;

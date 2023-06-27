export const duplexFragment = `fragment DuplexFragment on ComponentDuplex {
  sys {
    id
  }
  image {
    description
    url
  }
  headline
  description {
    json
  }
  button {
    text
    url
    reference {
      slug
    }
    style
    color
    size
  }
}`;

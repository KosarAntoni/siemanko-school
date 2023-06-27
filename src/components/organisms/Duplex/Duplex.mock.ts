import { DuplexProps } from './Duplex.models';

export const mock = {
  headline: 'Kilka słów o nas',
  description: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value:
                'Wszystko zaczęło się od pasji, która dziś dokonuje rewolucji w życiu naszym i naszych klientów. Wiedzieliśmy, że dokonamy wiele. Nie przypuszczaliśmy jednak, że prawdziwa pasja i systematyczna praca, tak szybko zaprowadzi nas na sam szczyt w ciągu zaledwie 5 lat!',
              marks: [],
              data: {},
            },
          ],
        },
      ],
    },
  },
  button: {
    text: 'CZYTAJ WIĘCEJ',
    url: null,
    reference: null,
    style: 'Outline',
    color: 'Orange',
    size: 'Big',
  },
  image: {
    description: 'Cała ekipa instruktorów Siemanko',
    url: 'https://images.ctfassets.net/39emsr6r0xu2/6VZJiGrlzCmDjIZdXNJkYe/eaf38e615f003e9f5f125031ee143296/zaloga_siemanko_01.jpg',
  },
} as DuplexProps;

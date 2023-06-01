import type { CodegenConfig } from '@graphql-codegen/cli';

import { fetchConfig } from './src/lib/api';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [fetchConfig.endpoint]: fetchConfig.params,
    },
  ],
  documents: 'src/**/*.tsx',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;

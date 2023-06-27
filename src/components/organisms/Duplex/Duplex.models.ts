import { Document } from '@contentful/rich-text-types';

import { ButtonProps } from '@/components/atoms/Button';

export interface DuplexProps {
  headline: string;
  image: {
    url: string;
    description: string;
  };
  className?: string;
  description?: {
    json: Document;
  };
  button?: ButtonProps;
}

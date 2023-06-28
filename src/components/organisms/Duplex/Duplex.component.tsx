'use client';
import React, { useRef } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './Duplex.styles.module.scss';

import { DuplexProps } from './Duplex.models';

import Button from '@/components/atoms/Button/Button.component';
import useElementPosition from '@/hooks/useElementPosition';

export const getOffset = (position: number, sectionHeight?: number): number => {
  if (!sectionHeight) return 0;

  return Math.round((position / (sectionHeight / 50)) * -1);
};

const Duplex = ({
  className,
  image,
  headline,
  button,
  description,
  imagePosition = 'Left',
}: DuplexProps): JSX.Element => {
  const sectionsRef = useRef<HTMLElement>(null);
  const position = useElementPosition(sectionsRef);

  const sectionHeight = sectionsRef?.current?.offsetHeight;

  return (
    <section
      ref={sectionsRef}
      className={clsx(styles.duplex, imagePosition === 'Right' && styles.duplexImageOnRight, className)}
      data-testid="duplex-item"
    >
      <Image
        src={image.url}
        alt={image.description}
        width={560}
        height={700}
        style={{ ['--translate-y' as string]: `${getOffset(position, sectionHeight)}px` }}
      />
      <div className={styles.duplexContent}>
        <h2>{headline}</h2>
        {description?.json && documentToReactComponents(description.json)}
        {button?.text && <Button {...button} />}
      </div>
    </section>
  );
};

export default Duplex;

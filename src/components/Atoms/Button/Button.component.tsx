import React, { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './Button.styles.module.scss';

import { ButtonProps } from './Button.models';

const Button: FC<ButtonProps> = ({
  children,
  className,
  url,
  onClick,
  color = 'Orange',
  style = 'Solid',
  size = 'Regular',
  type = 'button',
}) => {
  const buttonClasses = clsx(
    styles.button,
    className,
    color && styles[`button${color}`],
    style && styles[`button${style}`],
    size && styles[`button${size}`],
  );

  if (url) {
    const internal = /^\/(?!\/)/.test(url);

    return internal ? (
      <Link href={url} className={buttonClasses}>
        {children}
      </Link>
    ) : (
      <a href={url} className={buttonClasses} target="_blank">
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type={type} onClick={onClick} className={buttonClasses}>
        {children}
      </button>
    );
  }

  return (
    <span className={buttonClasses} data-testid="button-item">
      {children}
    </span>
  );
};

export default Button;

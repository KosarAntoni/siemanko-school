import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './Button.styles.module.scss';

import { ButtonProps } from './Button.models';

const Button = ({
  children,
  text,
  className,
  url,
  onClick,
  color = 'Orange',
  style = 'Solid',
  size = 'Regular',
  type = 'button',
}: ButtonProps): JSX.Element => {
  const buttonClasses = clsx(
    styles.button,
    color && styles[`button${color}`],
    style && styles[`button${style}`],
    size && styles[`button${size}`],
    className,
  );

  if (url) {
    const internal = /^\/(?!\/)/.test(url);

    return internal ? (
      <Link href={url} className={buttonClasses}>
        {text || children}
      </Link>
    ) : (
      <a href={url} className={buttonClasses} target="_blank">
        {text || children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type={type} onClick={onClick} className={buttonClasses}>
        {text || children}
      </button>
    );
  }

  return (
    <div className={buttonClasses} data-testid="button-item">
      {text || children}
    </div>
  );
};

export default Button;

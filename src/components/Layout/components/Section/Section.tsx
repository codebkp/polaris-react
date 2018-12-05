import * as React from 'react';
import {classNames} from '@shopify/react-utilities/styles';
import * as styles from '../../Layout.scss';

export interface Props {
  children?: React.ReactNode;
  secondary?: boolean;
  fullWidth?: boolean;
  evenWidth?: boolean;
}

export default function Section({
  children,
  secondary,
  fullWidth,
  evenWidth,
}: Props) {
  const className = classNames(
    styles.Section,
    secondary && styles['Section-secondary'],
    fullWidth && styles['Section-fullWidth'],
    evenWidth && styles['Section-evenWidth'],
  );

  return <div className={className}>{children}</div>;
}

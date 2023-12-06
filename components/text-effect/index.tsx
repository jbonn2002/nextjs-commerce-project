const { SITE_NAME } = process.env;

import Balancer from 'react-wrap-balancer';
import styles from './text.module.css';

export default function TextEffect({
  text,
  small,
  ...props
}: {
  text: string | undefined;
  small?: boolean;
  className?: string;
}) {
  return (
    <Balancer as="h1" {...props}>
      <span
        className={`${styles.h1} ${small === true ? 'animate-textSmall' : 'animate-textLarge'}`}
      >
        {text}
      </span>
    </Balancer>
  );
}

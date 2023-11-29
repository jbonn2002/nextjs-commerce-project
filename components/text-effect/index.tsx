const { SITE_NAME } = process.env;

import Balancer from 'react-wrap-balancer';
import styles from './text.module.css';

export default function TextEffect() {
  return (
    <Balancer
      as="h1"
      className={`${styles.body} text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl`}
    >
      <span className={styles.h1}>{SITE_NAME}</span>
    </Balancer>
  );
}

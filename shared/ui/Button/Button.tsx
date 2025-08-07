import { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export default function Button({ children, onClick, type = 'button' }: Props) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
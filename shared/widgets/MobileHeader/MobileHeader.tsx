'use client';

import { useState } from 'react';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import styles from './MobileHeader.module.css';


export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <button
          className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>

        <div className={styles.spacer} />

        <div className={styles.avatarPlaceholder} />
      </header>

      <MobileDrawer isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
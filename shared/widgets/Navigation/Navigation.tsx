'use client';

import { usePathname } from 'next/navigation';
import { navigationTabsList } from '@/shared/config/navigationTabsList';
import Link from 'next/link';
import styles from './Navigation.module.css';


export default function Navigation() {
  const pathname = usePathname() || '';

  return (
    <nav className={styles.nav}>
      {navigationTabsList.map(({ href, icon, label }) => {
        const isActive = href ? pathname.startsWith(href) : false;
        const iconClass = isActive ? styles.activeIcon : styles.icon;

        return href ? (
          <Link href={href} key={label} className={styles.navItem}>
            <img src={icon} alt={label} className={iconClass} />
          </Link>
        ) : (
          <button
            key={label}
            className={styles.navItem}
            type="button"
          >
            <img src={icon} alt={label} className={styles.icon} />
          </button>
        );
      })}
    </nav>
  );
}
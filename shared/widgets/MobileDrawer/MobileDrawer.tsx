'use client';

import { usePathname } from 'next/navigation';
import { navigationTabsList } from '@/shared/config/navigationTabsList';
import Link from 'next/link';
import styles from './MobileDrawer.module.css';


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: Props) {
  const pathname = usePathname() || '';

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
        onClick={onClose}
      />
      <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          {navigationTabsList.map(({ href, mobileIcon, label }) => {
            const isActive = href ? pathname.startsWith(href) : false;
            const iconClass = isActive ? styles.activeIcon : styles.icon;

            return href ? (
              <Link
                href={href}
                key={label}
                className={styles.navItem}
                onClick={onClose}
              >
                <img src={mobileIcon} alt={label} className={iconClass} />
                <span className={styles.label}>{label}</span>
              </Link>
            ) : (
              <button key={label} className={styles.navItem} onClick={onClose}>
                <img src={mobileIcon} alt={label} className={styles.icon} />
                <span className={styles.label}>{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
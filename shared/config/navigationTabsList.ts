export type NavigationTabsList = {
  href?: string;
  icon: string;
  label: string;
  mobileIcon: string;
}

export const navigationTabsList: NavigationTabsList[] = [
  { href: '/events', icon: '/icons/home.svg', label: 'События', mobileIcon:'/icons/home_black.svg' },
  { href: '/event/create', icon: '/icons/plus_circle.svg', label: 'Создать', mobileIcon:'/icons/plus_circle_black.svg' },
  { icon: '/icons/chat.svg', label: 'Чат', mobileIcon:'/icons/chat_black.svg' },
  { icon: '/icons/notifications.svg', label: 'Уведомления', mobileIcon:'/icons/notifications_black.svg' },
];
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Lista de enlaces para la navegación lateral.
// En una app más grande, esto podría venir de una base de datos.
const sidebarLinks = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': pathname === href,
            }
          )}
        >
          <Icon className="w-6" />
          <span className="hidden md:block">{name}</span>
        </Link>
      ))}
    </>
  );
}

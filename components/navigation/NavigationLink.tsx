'use client';

import { ElementType, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarNavigationLinkProps {
  children: ReactNode;
  Icon: ElementType;
  href: string;
}

export default function SidebarNavigationLink({
  children,
  Icon,
  href,
}: SidebarNavigationLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
        ${isActive ? 'bg-gray-100' : 'hover:bg-gray-100'}
      `}
    >
      <span className="opacity-50">
        <Icon className="w-5.5" />
      </span>

      <span className="text-gray-950 font-medium">{children}</span>
    </Link>
  );
}

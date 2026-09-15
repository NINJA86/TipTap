'use client';

import { ElementType, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { linkItems } from '@/type';

interface SidebarNavigationMenuProps {
  children: ReactNode;
  Icon: ElementType;
  isOpen: boolean;
  onToggle: () => void;
  subContentList: linkItems[];
}

export default function SidebarNavigationMenu({
  children,
  Icon,
  subContentList,
  isOpen,
  onToggle,
}: SidebarNavigationMenuProps) {
  const pathname = usePathname();

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex cursor-pointer items-center justify-between px-3 py-2 rounded-lg transition-colors
          ${isOpen ? 'menuItem-active' : 'hover:bg-gray-100'}
        `}
      >
        <div className="flex items-center gap-3">
          <Icon
            className={`w-5.5 transition-colors ${isOpen ? 'menuItem-icon-active' : 'menuItem-icon-inactive'}`}
          />

          <span className={`font-medium transition-colors`}>{children}</span>
        </div>

        <ChevronDown
          className={`w-5.5 opacity-50 transition-transform duration-300
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
        />
      </button>

      <div
        className={`grid  transition-[grid-template-rows,opacity] duration-300 ease-in-out
    ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="ms-9 mt-2 space-y-1 pb-1">
            {subContentList.map((item) => {
              if (!item.href) return null;

              const isActive = pathname === item.href;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'menu-dropdown-item-active'
                        : 'menu-dropdown-item-inactive hover:bg-gray-100 hover:text-gray-950'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

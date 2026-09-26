'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar';

import Logo from '@/components/ui/logo';
import SidebarNavigationMenu from '@/components/navigation/NavigationMenu';
import SidebarNavigationLink from '@/components/navigation/NavigationLink';

import {
  LayoutDashboard,
  Bot,
  ShoppingCart,
  Calendar,
  User,
  CheckSquare,
  FileText,
  Table,
} from 'lucide-react';
import { menuItems } from '@/type';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getActiveMenuId } from '@/lib/funcs';

export const sidebarMenu: menuItems[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: LayoutDashboard,
    subItems: [
      { id: 11, title: 'Ecommerce', href: '/' },
      { id: 12, title: 'Analytics', href: '/analytics' },
      { id: 13, title: 'Marketing', href: '/marketing' },
      { id: 14, title: 'CRM', href: '/crm' },
      { id: 15, title: 'Stocks', href: '/stocks' },
      { id: 16, title: 'SaaS', href: '/saas' },
      { id: 17, title: 'Logistics', href: '/logistics' },
      { id: 18, title: 'AI', href: '/ai' },
      { id: 19, title: 'Sales', href: '/sales' },
      { id: 20, title: 'Finance', href: '/finance' },
    ],
  },
  {
    id: 2,
    title: 'AI Assistant',
    icon: Bot,
    subItems: [
      { id: 21, title: 'Text Generator', href: '/text-generator' },
      { id: 22, title: 'Image Generator', href: '/image-generator' },
      { id: 23, title: 'Code Generator', href: '/code-generator' },
      { id: 24, title: 'Video Generator', href: '/video-generator' },
      { id: 25, title: 'AI Settings', href: '/ai-settings' },
    ],
  },
  {
    id: 3,
    title: 'E-commerce',
    icon: ShoppingCart,
    subItems: [
      { id: 31, title: 'Products', href: '/products-list' },
      { id: 32, title: 'Add Product', href: '/add-product' },
      { id: 33, title: 'Billing', href: '/billing' },
      { id: 34, title: 'Invoices', href: '/invoices' },
      { id: 35, title: 'Single Invoice', href: '/single-invoice' },
      { id: 36, title: 'Create Invoice', href: '/create-invoice' },
      { id: 37, title: 'Transactions', href: '/transactions' },
      { id: 38, title: 'Single Transaction', href: '/single-transaction' },
    ],
  },
  {
    id: 4,
    title: 'Calendar',
    icon: Calendar,
    href: '/calendar',
  },
  {
    id: 5,
    title: 'User Profile',
    icon: User,
    href: '/profile',
  },
  {
    id: 6,
    title: 'Task',
    icon: CheckSquare,
    subItems: [
      { id: 61, title: 'List', href: '/task-list' },
      { id: 62, title: 'Kanban', href: '/kanban' },
    ],
  },
  {
    id: 7,
    title: 'Forms',
    icon: FileText,
    subItems: [
      { id: 71, title: 'Form Elements', href: '/form-elements' },
      { id: 72, title: 'Form Layout', href: '/form-layout' },
    ],
  },
  {
    id: 8,
    title: 'Tables',
    icon: Table,
    subItems: [
      { id: 81, title: 'Basic Tables', href: '/basic-tables' },
      { id: 82, title: 'Data Tables', href: '/data-tables' },
    ],
  },
];

export default function SidebarPanel() {
  const path = usePathname();
  const [openId, setOpenId] = useState<number | null>(() =>
    getActiveMenuId(path, sidebarMenu),
  );

  return (
    <Sidebar>
      <Logo />

      <SidebarContent className="no-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenu.map((item) => {
                if (item.subItems) {
                  return (
                    <SidebarNavigationMenu
                      key={item.id}
                      isOpen={openId === item.id}
                      onToggle={() =>
                        setOpenId(openId === item.id ? null : item.id)
                      }
                      Icon={item.icon}
                      subContentList={item.subItems}
                    >
                      {item.title}
                    </SidebarNavigationMenu>
                  );
                }

                if (item.href) {
                  return (
                    <SidebarNavigationLink
                      key={item.id}
                      Icon={item.icon}
                      href={item.href}
                    >
                      {item.title}
                    </SidebarNavigationLink>
                  );
                }

                return null;
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

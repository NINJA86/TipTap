import { menuItems } from '@/type';

export function getActiveMenuId(path: string, sidebarMenu: menuItems[]) {
  return (
    sidebarMenu.find((sidebarMenuItem) => {
      return sidebarMenuItem.subItems?.some((subItem) => subItem.href === path);
    })?.id ?? null
  );
}

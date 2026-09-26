import { SidebarProvider } from '@/components/ui/sidebar';
import SidebarPanel from '@/components/layout/Sidebar/sidebar-panel';
import Header from '@/components/layout/Header/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarPanel />
      <main className="flex-1 h-[100000rem]">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}

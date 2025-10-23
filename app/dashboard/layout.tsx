// app/dashboard/layout.tsx
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#fdf6f0]">
      {/* Sidebar */}
      <div className="w-full flex-none md:w-64 bg-orange-100 shadow-lg">
        <SideNav />
      </div>

      {/* Contenido principal */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="rounded-xl bg-white/80 shadow-xl p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

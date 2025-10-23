import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-orange-100 shadow-lg">
      {/* Logo */}
      <Link
        className="mb-4 flex h-20 items-center justify-center rounded-md bg-orange-600 p-4 md:h-32 hover:bg-orange-500 transition-colors"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      {/* Navegación */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-3">
        <NavLinks />

        {/* Separador decorativo */}
        <div className="hidden h-auto w-full grow rounded-md bg-orange-50 md:block"></div>

        {/* Botón de salir */}
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-red-100 p-3 text-sm font-medium text-red-700 hover:bg-red-200 transition-colors md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}

import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center gap-3 leading-none`}
    >

      {/* Texto del logo */}
      <p className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-md">
        EL Totumazo
      </p>
    </div>
  );
}

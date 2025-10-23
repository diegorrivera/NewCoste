import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'badge gap-1 px-3 py-2 text-sm',
        {
          'badge-warning text-yellow-900': status === 'pending',
          'badge-success text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' && (
        <>
          Pendiente <ClockIcon className="w-4" />
        </>
      )}
      {status === 'paid' && (
        <>
          Pagada <CheckIcon className="w-4" />
        </>
      )}
    </span>
  );
}

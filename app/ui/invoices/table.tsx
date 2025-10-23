import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto rounded-lg shadow-lg bg-base-100">
        <table className="table table-zebra w-full">
          <thead className="bg-orange-200 text-orange-900">
            <tr>
              <th>Cliente</th>
              <th>PLATO</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th className="text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {invoices?.map((invoice) => (
              <tr key={invoice.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <Image
                      src={invoice.image_url}
                      className="rounded-full"
                      width={32}
                      height={32}
                      alt={`${invoice.name}'s profile picture`}
                    />
                    <span>{invoice.name}</span>
                  </div>
                </td>
                <td>{invoice.email}</td>
                <td className="font-semibold text-green-700">
                  {formatCurrency(invoice.amount)}
                </td>
                <td>{formatDateToLocal(invoice.date)}</td>
                <td>
                  <InvoiceStatus status={invoice.status} />
                </td>
                <td className="text-right">
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

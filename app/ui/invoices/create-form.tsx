import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form action={createInvoice} className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-xl font-bold mb-4 text-primary">Crear Factura</h2>

      {/* Cliente */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Cliente</span>
        </label>
        <div className="relative">
          <select
            id="customer"
            name="customerId"
            className="select select-bordered w-full pl-10"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona un cliente
            </option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
          <UserCircleIcon className="absolute left-3 top-3 w-5 text-gray-500" />
        </div>
      </div>

      {/* Monto */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Monto</span>
        </label>
        <div className="relative">
          <input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            placeholder="Ingrese monto en USD"
            className="input input-bordered w-full pl-10"
          />
          <CurrencyDollarIcon className="absolute left-3 top-3 w-5 text-gray-500" />
        </div>
      </div>

      {/* Estado */}
      <div className="form-control mb-6">
        <label className="label">
          <span className="label-text">Estado</span>
        </label>
        <div className="flex gap-4">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="status"
              value="pending"
              className="radio radio-warning"
            />
            <span className="badge badge-warning gap-1">
              Pendiente <ClockIcon className="w-4" />
            </span>
          </label>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="radio"
              name="status"
              value="paid"
              className="radio radio-success"
            />
            <span className="badge badge-success gap-1 text-white">
              Pagada <CheckIcon className="w-4" />
            </span>
          </label>
        </div>
      </div>

      {/* Botones */}
      <div className="flex justify-end gap-4">
        <Link href="/dashboard/invoices" className="btn btn-ghost">
          Cancelar
        </Link>
        <Button type="submit" className="btn btn-primary">
          Crear Factura
        </Button>
      </div>
    </form>
  );
}

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main className="bg-base-200 min-h-screen p-8">
      {/* Encabezado */}
      <div className="mb-8 text-center">
        <h1
          className={`${lusitana.className} text-4xl font-bold text-primary`}
        >
          🍷 Restaurante Totumazo
        </h1>
        <p className="text-lg text-secondary mt-2">
          Bienvedos
        </p>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card bg-orange-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-orange-800">Facturas Pagadas</h2>
            <p className="text-3xl font-bold">{totalPaidInvoices}</p>
          </div>
        </div>
        <div className="card bg-yellow-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-yellow-800">Pendientes</h2>
            <p className="text-3xl font-bold">{totalPendingInvoices}</p>
          </div>
        </div>
        <div className="card bg-red-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-red-800">Total Facturas</h2>
            <p className="text-3xl font-bold">{numberOfInvoices}</p>
          </div>
        </div>
        <div className="card bg-green-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-green-800">Clientes</h2>
            <p className="text-3xl font-bold">{numberOfCustomers}</p>
          </div>
        </div>
      </div>

      {/* Gráficos y últimas facturas */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">📊 Ingresos</h2>
            <Suspense fallback={<RevenueChartSkeleton />}>
              <RevenueChart />
            </Suspense>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-primary">🧾 Últimas Facturas</h2>
            <Suspense fallback={<LatestInvoicesSkeleton />}>
              <LatestInvoices />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}

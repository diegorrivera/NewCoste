"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-b from-yellow-100 via-orange-100 to-blue-100">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-lg md:h-40"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
          EL TOTUMAZO
        </h1>
      </motion.div>

      {/* Contenido */}
      <div className="mt-8 flex grow flex-col gap-6 md:flex-row">
        {/* Panel Izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center gap-6 rounded-lg bg-white/90 backdrop-blur px-6 py-10 shadow-xl md:w-2/5 md:px-12"
        >
          <h2
            className={`text-2xl text-gray-800 md:text-3xl md:leading-snug ${lusitana.className}`}
          >
            <strong className="text-orange-600">Sabores auténticos</strong> de la
            costa colombiana, servidos con tradición y alegría.
          </h2>

          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-orange-600 md:text-base"
              >
                <span>Login</span>
                <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/register"
                className="flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-red-600 md:text-base"
              >
                <span>Registro</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Panel Derecho */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center p-6 md:w-3/5 md:px-12 md:py-8"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
                src="/Totumazo/portada.webp"
              width={1000}
              height={760}
              className="rounded-lg shadow-lg"
              alt="Platos típicos de la costa colombiana"
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

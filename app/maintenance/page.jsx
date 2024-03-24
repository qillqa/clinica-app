'use client'

import Hero from "@/components/Hero"
import { toast } from "sonner"

export default function MaintenancePage() {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">CLINIC APP</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Bienvenido al sistema de mantenimiento</p>
        </div>
      </div>
    </>
  )
}

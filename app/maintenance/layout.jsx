'use client'

import HeaderMaintenance from "@/components/HeaderMaintenance";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

import { Toaster } from "sonner";

export default function MaintenanceLayout({ children }) {
  const router = useRouter()

  return (
    <>
      <HeaderMaintenance />

      <main className="m-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>

      <Toaster richColors position="top-right" />
    </>
  )
}

'use client'

import HeaderLanding from "@/components/HeaderLanding";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

import { Toaster } from "sonner";

export default function HomeLayout({ children }) {
  const router = useRouter()

  return (
    <>
      <HeaderLanding />

      <main className="m-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>

      <Toaster richColors position="top-right" />
    </>
  )
}

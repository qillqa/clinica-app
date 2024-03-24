'use client'

import Hero from "@/components/Hero"
import { toast } from "sonner"

export default function HomePage() {
  return (
    <>
        <h1 className='text-4xl my-4 ml-4'>Clínica María del Socorro</h1>
        <Hero />
    </>
  )
}

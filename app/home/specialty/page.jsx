'use client'

import { useEffect, useState } from "react"

import { toast } from "sonner"
import { TbCirclePlus, TbLoader2 } from "react-icons/tb";
import { fetchSpecialtiesLanding } from "@/services/landing/specialtiesLanding";
import CardSpecialties from "@/components/CardSpecialties";


export default function SpecialtyPage() {
    // const [loading, setLoading] = useState(false)
    const [specialties, setSpecialties] = useState([])

    useEffect(() => {
        // Este useEffect solo se ejecuta al crearse el componente
        fetchSpecialtiesLanding() // Devuelve una promesa
        .then(data => {
            setSpecialties(data.data)
        })
    }, [])

  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {specialties.length > 0 && specialties.map(specialty => {
                    return (
                        <CardSpecialties specialty={specialty} key={specialty.idEspecialidad}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

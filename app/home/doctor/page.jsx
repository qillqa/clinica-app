'use client'

import { useEffect, useState } from "react"

import { toast } from "sonner"
import { TbCirclePlus, TbLoader2 } from "react-icons/tb";
import { fetchDoctorsLanding } from "@/services/landing/doctorsLanding";
import CardDoctors from "@/components/CardDoctors";


export default function DoctorPage() {
    // const [loading, setLoading] = useState(false)
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        // Este useEffect solo se ejecuta al crearse el componente
        fetchDoctorsLanding() // Devuelve una promesa
        .then(data => {
            setDoctors(data.data)
        })
    }, [])

  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                    Directorio médico
                </h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                    Contamos con un selecto staff de profesionales médicos a su servicio.
                </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {doctors.length > 0 && doctors.map(doctor => {
                    return (
                        <CardDoctors doctor={doctor} key={doctor.idMedico}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

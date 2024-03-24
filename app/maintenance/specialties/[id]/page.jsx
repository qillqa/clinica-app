'use client'

import { useEffect, useState } from "react"
import { fetchSpecialty } from "@/services/maintenance/specialties";
import Link from "next/link";

export default function SpecialtyDetail({ params }) {
    const { id } = params

    const [specialty, setSpecialty] = useState([])

    useEffect(() => {
        // Este useEffect solo se ejecuta al crearse el componente
        fetchSpecialty(id) // Devuelve una promesa
        .then(data => {
            setSpecialty(data.data)
        })
    }, [])    

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 mx-auto">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Nombre</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{specialty.nombre}</h1>
                        <div className="flex mb-4">
                            <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Descripción</a>
                        </div>
                        <p className="leading-relaxed mb-4">{specialty.nombre}</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Creado por</span>
                            <span className="ml-auto text-gray-900">{specialty.userCreate}</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Fecha de creación</span>
                            <span className="ml-auto text-gray-900">{specialty.dateCreate}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Estado</span>
                            <span className={`ml-auto text-gray-900 ${specialty.estado === 1? 'bg-sky-300': 'bg-red-300'}`}>
                                {specialty.estado === 1? "Activo": "Inactivo"}
                            </span>

                        </div>   

                        <div className="flex">
                            <div className="w-1/2">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <Link href={`/maintenance/specialties/${specialty.idEspecialidad}/edit`}>Editar</Link>
                                </button>
                            </div>
                            <div className="w-1/2">
                                <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <Link href="/maintenance/specialties">Volver</Link>
                                </button>
                            </div>                            
                        </div>                    
                        

                    </div>
                </div>
            </div>
        </section>        
    )
}

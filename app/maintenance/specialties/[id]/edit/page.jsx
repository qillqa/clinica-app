'use client'

import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { editSpecialty, fetchSpecialty } from "@/services/maintenance/specialties";

export default function SpecialtiesEditPage({ params }) {
    const router = useRouter()

    const { id } = params

    /*
    const initialState = {
        nombre: '',
        descripcion: '',
    }
    */

    const [specialty, setSpecialty] = useState([])

    useEffect(() => {
        // Este useEffect solo se ejecuta al crearse el componente
        fetchSpecialty(id) // Devuelve una promesa
        .then(data => {
            setSpecialty(data.data)
        })
    }, [])  

    const handleChange = (event) => {
        const { name, value } = event.target
    
        setSpecialty({ ...specialty, [name]: value })
    }

    const handleSave = async () => {
        // event.preventDefault();

        const data = {
          nombre: specialty.nombre,
          descripcion: specialty.descripcion
        }
        
        const result = await editSpecialty(id, data)
        
        console.log(result)

        toast.success('Se guardo los cambios correctamente.')

        router.push('/maintenance/specialties')
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Especialidades</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Actualización de especialidades de la clinica</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="nombre" className="leading-7 text-sm text-gray-600">Nombre</label>
                                <input 
                                    type="text" id="nombre" name="nombre" 
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                    onChange={handleChange}
                                    value={specialty.nombre}
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="descripcion" className="leading-7 text-sm text-gray-600">Descripción</label>
                                <textarea 
                                    id="descripcion" name="descripcion" 
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    onChange={handleChange}
                                    value={specialty.descripcion}                                
                                >
                                </textarea>
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <button 
                                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                onClick={handleSave}
                            >
                                Guardar
                            </button>
                        </div>
                        <div className="p-2 w-1/2">
                            <button 
                                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                <Link href="/maintenance/specialties">Volver</Link>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
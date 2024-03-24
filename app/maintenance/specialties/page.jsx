'use client'

import { Suspense } from 'react'
import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import { toast } from "sonner"
import { TbCirclePlus, TbLoader2 } from "react-icons/tb";
import { deleteSpecialty, fetchSpecialties } from "@/services/maintenance/specialties";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Loading from '@/components/loading'

export default function SpecialtiesPage() {
  // const [loading, setLoading] = useState(false)
  const [specialties, setSpecialties] = useState([])

  const router = useRouter()

  useEffect(() => {
      // Este useEffect solo se ejecuta al crearse el componente
      fetchSpecialties() // Devuelve una promesa
      .then(data => {
          setSpecialties(data.data)
      })
  }, [])

  const handleNew = () => {
    // toast.success('Nuevo.')
    router.push('/maintenance/specialties/new')
  }
  const handleEdit = (id) => {
    router.push(`/maintenance/specialties/${id}/edit`)
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar la especialidad?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Se elimino la especialidad.", "", "success");

        deleteSpecialty(id)
        .then(data => {
          toast.success('Se eliminó el expense correctamente.')
  
          fetchSpecialties() // Devuelve una promesa
          .then(data => {
              setSpecialties(data.data)
          })
        })
        .catch(error => {
          console.log(error)
          toast.success('Hubo un error al eliminar.')
        })
      }
    });
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Especialidades</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Listado de especialidades disponibles</p>
        </div>
        
        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto pb-5">
          <button 
            className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            onClick={() => handleNew()}
          >
            Nuevo
          </button>
        </div>

        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap border-collapse border-spacing-2 border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Id</th>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Especialidad</th>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Descripción</th>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Activo</th>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Acción</th>
              </tr>
            </thead>
            <tbody>
              <Suspense fallback={<Loading />}>
              {specialties.length > 0 && specialties.map(specialty => {
                return (
                  <tr key={specialty.idEspecialidad} className={`${specialty.estado === 1? '': 'bg-red-200'}`}>
                    <td className="border border-slate-300 px-4 py-3">{specialty.idEspecialidad}</td>
                    <td className="border border-slate-300 px-4 py-3">{specialty.nombre}</td>
                    <td className="border border-slate-300 px-4 py-3">{specialty.descripcion}</td>
                    <td className="border border-slate-300 px-4 py-3">{specialty.estado === 1? "Si": "no"}</td>
                    <td className="border border-slate-300 px-4 py-3">
                      <div className="flex space-x-4">
                        <button
                          className='bg-green-500 px-2 text-white rounded'
                          onClick={() => handleEdit(specialty.idEspecialidad)}
                        >
                          Editar
                        </button>
                        <button
                          className='bg-red-500 px-2 text-white rounded'
                          onClick={() => handleDelete(specialty.idEspecialidad)}
                        >
                          Eliminar
                        </button>
                        <span className="underline text-blue-500">
                          <Link href={`/maintenance/specialties/${specialty.idEspecialidad}`}>Ver detalle</Link>
                        </span>
                      </div>    
                    </td>
                  </tr>
                )
              })}
              </Suspense>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

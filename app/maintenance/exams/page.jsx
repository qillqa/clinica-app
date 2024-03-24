'use client'

import { useEffect, useState } from "react"

import { toast } from "sonner"
import { TbCirclePlus, TbLoader2 } from "react-icons/tb";
import { fetchExams } from "@/services/maintenance/exams";

export default function ExamsPage() {
    // const [loading, setLoading] = useState(false)
    const [exams, setExams] = useState([])

    useEffect(() => {
        // Este useEffect solo se ejecuta al crearse el componente
        fetchExams() // Devuelve una promesa
        .then(data => {
            setExams(data.data)
        })
    }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Exámenes</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Listado de exámenes ofrecidos</p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap border-collapse border-spacing-2 border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Id</th>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Examen</th>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Descripción</th>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Activo</th>
                <th className="border border-slate-300 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Acción</th>
              </tr>
            </thead>
            <tbody>
              
              {exams.length > 0 && exams.map(exam => {
                return (                  
                  <tr key={exam.idExamen} className={`${exam.estado === 1? '': 'bg-red-200'}`}>
                    <td className="border border-slate-300 px-4 py-3">{exam.idExamen}</td>
                    <td className="border border-slate-300 px-4 py-3">{exam.nombre}</td>
                    <td className="border border-slate-300 px-4 py-3">{exam.descripcion}</td>
                    <td className="border border-slate-300 px-4 py-3">{exam.estado === 1? "Si": "no"}</td>
                    <td className="border border-slate-300 px-4 py-3">
                      <div className="flex space-x-4">
                        <button
                          className='bg-green-500 px-2 text-white rounded'
                          onClick={() => handleEdit(exam.idExamen)}
                        >
                          Editar
                        </button>
                        <button
                          className='bg-red-500 px-2 text-white rounded'
                          onClick={() => handleDelete(exam.idExamen)}
                        >
                          Delete
                        </button>
                      </div>    
                    </td>                    
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

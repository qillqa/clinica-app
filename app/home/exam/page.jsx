'use client'

import { useEffect, useState } from "react"

import { toast } from "sonner"
import { TbCirclePlus, TbLoader2 } from "react-icons/tb";
import { fetchExamsLanding } from "@/services/landing/examsLanding";
import CardExams from "@/components/CardExams";


export default function ExamPage() {
    // const [loading, setLoading] = useState(false)
    const [exams, setExams] = useState([])

    useEffect(() => {
        // Este useEffect solo se ejecuta al crearse el componente
        fetchExamsLanding() // Devuelve una promesa
        .then(data => {
            setExams(data.data)
        })
    }, [])

  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {exams.length > 0 && exams.map(exam => {
                    return (
                        <CardExams exam={exam} key={exam.idExamen}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

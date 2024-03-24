'use client'

import { useEffect, useState } from "react"

import { toast } from "sonner"
import { TbCirclePlus, TbLoader2 } from "react-icons/tb";
import { login } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const router = useRouter()

    const initialState = {
      email: '',
      password: '',
    }
  
    const [form, setForm] = useState(initialState)
  
    const handleChange = (event) => {
      // console.log(event.target.name, event.target.value)
      const { name, value } = event.target
  
      setForm({ ...form, [name]: value })
    }
  
    const handleLogin = async (event) => {
      event.preventDefault();
  
      try {
        /*
        const response = await login(form)
        
        if (!response.token) {
          // Redireccionamos al login nuevamente
          router.push('/')
          return
        }
        

        // redireccionar a la ruta /home
        localStorage.setItem('auth-token', response.token)
        */

        router.push('/maintenance')
      } catch(error) {
        console.log(error)
      }
      // console.log('enviando credenciales del usuario...')
    }
  
// <main className="containe w-[400px] h-screen mx-auto space-y-6 flex flex-col justify-center">
// </main>
    return (
    <div className="containe w-[400px] mx-auto space-y-6 flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col justify-center">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-4xl font-semibold">Acceso</h1>
                <p className="text-sm text-slate-600">Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta.</p>
            </div>

            <form className="flex flex-col gap-2 p-8" onSubmit={handleLogin}>
                <label className="font-bold">Email</label>
                <input
                    className="border p-3 shadow-sm rounded-md"
                    type="email"
                    placeholder="jhondoe@mail.com"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                
                <label className="font-bold">Password</label>
                <input
                    className="border p-3 shadow-sm rounded-sm"
                    type="password"
                    placeholder="Ej. supersecret"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                
                <button className="mt-4 border p-3 bg-sky-700 text-white rounded-md cursor-pointer">Acceder</button>
            </form>

            <div className="flex justify-center gap-2 font-bold">
                <span>¿No tienes una cuenta?</span> <Link href="/home/register" className="text-sky-500">Registrarse</Link>
            </div>
        </div>
    </div>
    )
}

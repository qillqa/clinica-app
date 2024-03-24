import Link from "next/link";

export default function RegisterPage() {
  /* TODO: Trabajar en el envío del formulario al api de los campos: first_name, last_name, email, password */

  return (
    <>
      <div className="containe w-[400px] mx-auto space-y-6 flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col justify-center">

          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-semibold">Registro</h1>
            <p className="text-sm text-slate-600">Ingrese su correo electrónico a continuación para registrar su cuenta.</p>
          </div>

          <form className="flex flex-col gap-2 p-8">
            <label className="font-bold">Nombres</label>
            <input className="border p-3 shadow-sm rounded-md" type="text" placeholder="Jhon" />
    
            <label className="font-bold">Apellidos</label>
            <input className="border p-3 shadow-sm rounded-md" type="text" placeholder="Doe" />

            <label className="font-bold">Email</label>
            <input className="border p-3 shadow-sm rounded-md" type="email" placeholder="jhondoe@mail.com" />
            
            <label className="font-bold">Password</label>
            <input className="border p-3 shadow-sm rounded-sm" type="password" placeholder="Ej. supersecret" />
            
            <button className="mt-4 border p-3 bg-sky-700 text-white rounded-md cursor-pointer">Registrarse</button>
          </form>

          <div className="flex justify-center gap-2 font-bold">
            <span>¿Ya tienes una cuenta?</span> <Link href="/" className="text-sky-500">Ingresar</Link>
          </div>

        </div>
      </div>
    </>
  )
}
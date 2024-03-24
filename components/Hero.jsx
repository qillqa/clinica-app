import React from 'react'

import Image from 'next/image';

import mapa from '../public/images/mapa.png'

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    “Juntos cuidamos vidas por el bienestar de más personas.”
                </h1>
                <p className="mb-8 leading-relaxed">
                    Somos una red de Clínica y Centros médicos a nivel nacional, con la tecnología más moderna y el Staff médico más comprometido con la salud de nuestros pacientes y la de su familia.
                </p>

                <span className="block mb-4"><b>Dirección:</b> Jr. Apurimac #116, Calle Pasco 224, Ate 15498</span>
                <span className="block mb-4"><b>Teléfono:</b> 999 024 041</span>
                <span><b>Horario:</b> Abierto las 24 horas</span>
            </div>
        
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image className="object-cover object-center rounded" alt="mapa" src={mapa} />          
            </div>
        </div>
    </section>
  )
}

import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section id="about" className="w-full h-auto overflow-hidden">
      <div className="paddingX w-full h-full flex flex-col justify-start items-center gap-10">
        <div className="flex flex-col justify-end items-start w-full pt-28">
          <h2 className="font-comfortaa font-extrabold text-2xl text-gray-600">QUIENES SOMOS</h2>
          <span className="font-comfortaa font-extrabold text-sm text-gray-300">Cómo nació una idea que impulsa el cambio.</span>
        </div>

        <div className="flex flex-row max-[1100px]:flex-col justify-center items-center gap-4 w-full h-full pb-28">
          <div className="w-full h-[70vh] bg-blue-200/30 backdrop-blur-md shadow-lg ring-1 ring-black/5 rounded-xl">
            {/* <Image /> */}
          </div>

          <div className="w-full h-[70vh] flex justify-center items-center max-[1100px]:h-auto bg-blue-200/30 backdrop-blur-md shadow-lg ring-1 ring-black/5 rounded-xl py-12 px-10">
            <div className="flex flex-col items-center justify-center gap-4">
              <p>
                En <strong className="font-comfortaa">INOBA</strong>, nos encargamos de materializar tus sueños, dar los primeros pasos de tu proyecto y dejar una marca... con tu marca!
              </p>
              
              <div className="flex flex-col gap-2">
                <p>
                  Con una visión creativa e <strong className="font-comfortaa">INOBAdora</strong>, llevamos al límite los materiales tradicionales de la publicidad visual. Creemos en el poder de los emprendedores que quieren salir adelante y comprendemos los temores de empezar sin un rumbo claro.
                  Por eso, en <strong className="font-comfortaa">INOBA</strong>, también nos llamamos <strong className="font-comfortaa text-sm">Soluciones</strong>:
                </p>

                <ul className="flex flex-col items-start justify-center gap-2">
                  <li className="flex flex-row gap-4 items-center bg-gray-600 rounded-2xl">
                    <Link href="#contact" className="font-comfortaa bg-white text-gray-600 font-extrabold py-2 px-6 rounded-xl">INOBA Soluciones</Link>
                    <span className="text-white pr-8 text-xs">Soluciones en publicidad</span>
                  </li>
                  <li className="flex flex-row gap-4 items-center bg-gray-600 rounded-2xl">
                    <Link href="/studio" className="font-comfortaa bg-white text-gray-600 font-extrabold py-2 px-6 rounded-xl">INOBA Studio</Link>
                    <span className="text-white pr-8 text-xs">Manejo de redes sociales & Desarrollo de Software</span>
                  </li>
                  <li className="flex flex-row gap-4 items-center bg-gray-600 rounded-2xl">
                    <Link href="/asesorias" className="font-comfortaa bg-white text-gray-600 font-extrabold py-2 px-6 rounded-xl">INOBA Asesorias</Link>
                    <span className="text-white pr-8 text-xs">Asesoría contable</span>
                  </li>
                </ul>

                <p>
                  Estamos aquí para acompañarte en cada paso del camino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
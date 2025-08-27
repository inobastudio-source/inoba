import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <section id="gallery" className="w-full h-auto overflow-hidden">
      <div className="paddingX w-full h-full flex flex-col justify-start items-center gap-10">
        <div className="flex flex-col justify-end items-start w-full pt-28">
          <h2 className="font-comfortaa font-extrabold text-2xl text-gray-600">GALERIA</h2>
          <span className="font-comfortaa font-extrabold text-sm text-gray-300">Sumérgete en nuestro universo creativo.</span>
        </div>

        <div className="flex flex-row max-[1100px]:flex-col justify-center items-center gap-4 w-full h-full pb-28">
          <div className="w-full h-[70vh] bg-blue-200/30 backdrop-blur-md shadow-lg ring-1 ring-black/5 rounded-xl">
            {/* <Image /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
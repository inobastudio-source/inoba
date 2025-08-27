import { team } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const OurTeam = () => {
  return (
    <section id="our-team" className="w-full h-auto overflow-hidden">
      <div className="paddingX w-full h-full flex flex-col justify-start items-center gap-10">
        <div className="flex flex-col justify-end items-start w-full pt-28">
          <h2 className="font-comfortaa font-extrabold text-2xl text-gray-600">NUESTRO EQUIPO</h2>
          <span className="font-comfortaa font-extrabold text-sm text-gray-300">Descubre al equipo que hace todo esto posible.</span>
        </div>

        <div className="grid grid-cols-4 grid-rows-1 max-[1300px]:grid-cols-2 max-[1300px]:grid-rows-2 max-sm:grid-cols-1 justify-center items-center gap-4 w-full h-full pb-28">
          {team.map((member, i) => (
            <div key={i} className="h-[40vh] shadow-md rounded-xl flex flex-col px-4 py-2 gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-comfortaa text-xs font-extralight">{member.role}</span>
                <span className="font-comfortaa text-xl font-extrabold">{member.name}</span>
              </div>

              <div className="flex items-center justify-center w-full h-full">
                <Image src={member.image} alt={member.name} width={100} height={100} className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
import React from "react";
import Image from "next/image";
import { TeamVenanda } from "./team";

const Teamabout = () => {
  return (
    <section id="bakingclass">
      <h1 className="text-center font-bold text-4xl text-amber-900">
        Meet Our Venanda Teams
        <hr className="w-20 h-1 mx-auto my-4 bg-amber-500 border-0 rounded" />
      </h1>
      <div className="grid gap-x-6 md:grid-cols-4 lg:gap-x-12">
        {TeamVenanda.map((own) => (
          <div className="group relative" key={own.nama}>
            <div className="mb-6 mt-10 flex justify-center">
              <Image
                src={own.gambar}
                width={200}
                height={200}
                alt="foto team"
                className=" rounded-full shadow-lg dark:shadow-black/20"
                loading="eager"
              />
            </div>

            <div className="grid gap-x-6  lg:gap-x-12">
              <div className="pt-6 text-center text-lg">
                <h2 className="text-xl font-bold items-center text-amber-950">
                  <span aria-hidden="true" className="absolute"></span>
                  {own.nama}
                </h2>
                <h4 className="mt-2 text-sm font-semibold text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {own.Posisi}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teamabout;

import React from "react";
import { KontakVenanda } from "./kontak";
import Image from "next/image";

const MeetUs = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center my-10 py-5">
      <h1 className="text-center font-bold text-4xl text-amber-900">
        Meet Us
        <hr className="w-20 h-1 mx-auto my-4 bg-amber-500 border-0 rounded" />
      </h1>
      <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
        {KontakVenanda.map((kontak) => (
          <div className="group relative" key={kontak.nama}>
            <div className="mb-6 mt-10 flex justify-center">
              <Image
                src={kontak.gambar}
                width={200}
                height={200}
                alt="contact venanda"
                className=" rounded-full shadow-lg dark:shadow-black/20"
                loading="eager"
              />
            </div>

            <div className="grid gap-x-6  lg:gap-x-12">
              <div className="pt-6 text-center text-lg">
                <h2 className=" font-bold items-center text-amber-950">
                  <span aria-hidden="true" className="absolute"></span>
                  {kontak.nama}
                </h2>
                <h3 className="mt-2 text-lg font-semibold text-gray-700">
                  <a href={kontak.url} target="_blank">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {kontak.Keterangan}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetUs;

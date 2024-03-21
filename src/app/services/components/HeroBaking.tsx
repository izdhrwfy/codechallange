"use client";
import React from "react";
import Image from "next/image";
import { Herobake } from "../kelas";
import Link from "next/link";

const HeroBaking = () => {
  return (
    <section id="bakingclass">
      <h1 className="text-center font-bold text-4xl text-amber-900">
        Our Baking Class
        <hr className="w-20 h-1 mx-auto my-4 bg-amber-500 border-0 rounded" />
      </h1>
      <div className="pt-20 flex flex-col space-y-20">
        {Herobake.map((kelas, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Image
                    src={kelas.gambar}
                    alt="kelasvenanda"
                    width={500}
                    height={500}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </div>
                <div className="mt-10 md:w-1/2">
                  <h2 className="text-4xl font-bold mb-6">{kelas.nama}</h2>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {kelas.deskripsi}
                  </p>
                  <div className="flex gap-5 pt-5 max-[385px]:flex-col max-[385px]:text-center">
                    <Link
                      href="/services"
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-amber-900 dark:text-white dark:border-amber-600 dark:hover:bg-amber-700 dark:hover:border-amber-600 dark:focus:ring-amber-700"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroBaking;

import React from "react";
import Image from "next/image";
import AboutVenanda from "../../../../public/assets/aboutVenanda.jpg";

const History = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center my-10 py-5">
      <h1 className="text-center font-bold text-4xl text-amber-900">
        About Venanda
        <hr className="w-20 h-1 mx-auto my-4 bg-amber-500 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-10 text-center items-center justify-center my-2 py-5 md:flex-row md:space-x-4 md:text-left mb-5">
        <div>
          <Image
            src={AboutVenanda}
            alt="about venanada"
            width={4000}
            height={4000}
          />
        </div>

        <br />
        <div>
          <p>
            Didirikan sejak tahun 2006, <b>Venanda Bakery</b> adalah toko roti
            kecil di kota Kudus, Jawa Tengah yang menyediakan banyak macam
            pilihan roti, cake, cookies, dan pastry untuk kebutuhan acara ulang
            tahun, catering, arisan, dll. Kami terus berupaya menggunakan
            bahan-bahan berkualitas tinggi, tidak menggunakan pengawet, dan
            terus melakukan inovasi baru terhadap produk yang kami jual. Kamipun
            berupaya memberikan harga yang terjangkau dengan kualitas premium.
          </p>
          <br />
          <p>
            Dengan permintaan lingkungan sekitar, di tahun 2013,{" "}
            <b>Venanda Bakery</b> membuka <b>Baking Class</b> untuk kalangan
            umum. Venanda Baking Class adalah kelas bidang
            Roti-Cake-Pastry-Cookies yang sudah mencetak ribuan orang dan
            Alhamdulillah sudah menjadi pengusaha roti di Kudus, Pati, Jepara,
            Demak, Semarang, Purwodadi, Rembang, Lasem, Tuban, dan Kuwait.
          </p>
          <br />
          <p>
            <b>Venanda Bakery and Baking Class,</b>
            <br />
            Jl. K. H. Muhammad Arwani No. 7, Kajeksan, Kudus, Jawa Tengah.
            <br />
            <b>Jam Buka:</b>
            <br /> Minggu - Kamis, pukul 08.00-17.00 WIB
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default History;

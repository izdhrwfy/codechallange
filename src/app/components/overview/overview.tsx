import Image from "next/image";
import OverviewImg from "../../../../public/assets/overview.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Overview() {
  return (
    <section id="companyoverview">
      <div className="text-center">
        <h2 className="font-bold text-4xl text-amber-900">
          Kenapa Venanda Baking Class?
          <hr className="w-20 h-1 mx-auto my-4 bg-amber-500 border-0 rounded" />
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center mb-5">
        <Image
          src={OverviewImg}
          width={500}
          height={200}
          alt="fotooverview"
          className="m-6"
        />
        <TypeAnimation
          sequence={[
            "Baking with You",
            1000,
            "Baking for You",
            1000,
            "Let's bake come TRUE!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="font-bold text-3xl inline-block  text-amber-600"
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <p className="pl-6 pr-6 pt-6 text-center text-lg text-gray-500">
          Venanda Baking Class selalu berupaya yang terbaik dalam memberikan
          layanan kursus bidang bakery yaitu roti, cake, cookies dan pastry
          sejak tahun 2010. Dengan trainer bakery profesional, kami telah
          mencetak ribuan pengusaha bidang bakery yang tersebar di Kudus, Pati,
          Jepara, Demak, Semarang, Purwodadi, Rembang, Lasem, Tuban, dan Kuwait.
          Komitmen kami terhadap kualitas dan kepuasan siswa mendorong kami
          untuk selalu berupaya yang terbaik dengan menyajikan materi kursus
          yang mudah dipahami siswa tanpa background bakery sekalipun. Yuk
          daftar sekarang di Venanda Baking Class!
        </p>
      </div>
    </section>
  );
}

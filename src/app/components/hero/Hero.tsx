import Image from "next/image";
import banner from "../../../../public/assets/Hero.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center my-10 py-10">
        <Image
          src={banner}
          alt="banner image"
          className="w-full max-h-screen object-contain"
        />
        <div>
          <p className="pt-6 text-center text-lg text-gray-500 ">
            Venanda Baking Class adalah kelas bidang Roti, Cake, Pastry, Cookies
            yang terletak di kota Kudus, Jawa Tengah. Terdapat dua macam pilihan
            kelas, yaitu Kelas Dasar dan Kelas Pecahan. Venanda Baking Class
            telah mencetak ribuan orang dan Alhamdulillah sudah menjadi
            pengusaha roti di Kudus, Pati, Jepara, Demak, Semarang, Purwodadi,
            Rembang, Lasem, Tuban, dan Kuwait sejak tahun 2010.
          </p>
        </div>
        <div className="flex gap-5 pt-5 max-[385px]:flex-col max-[385px]:text-center">
          <Link
            href="/about"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-amber-900 dark:text-white dark:border-amber-600 dark:hover:bg-amber-700 dark:hover:border-amber-600 dark:focus:ring-amber-700"
          >
            Learn More
          </Link>
          <Link
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-amber-900 dark:text-white dark:border-amber-600 dark:hover:bg-amber-700 dark:hover:border-amber-600 dark:focus:ring-amber-700"
            href="https://api.whatsapp.com/message/S2NWG5EAG3KQM1?autoload=1&app_absent=0"
            target="_blank"
          >
            WhatsApp Us!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

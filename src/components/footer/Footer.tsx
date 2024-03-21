import LogoVenanda2 from "../../../public/assets/whitelogo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="p-5 bg-amber-950 text-gray-300 flex items-center justify-between">
      <div className="xl:px-10">
        <Image src={LogoVenanda2} alt="logo" className="w-20" />
      </div>
      <p className="text-sm text-white">©VENANDA-CLONE,2024</p>
    </div>
  );
}

export default Footer;

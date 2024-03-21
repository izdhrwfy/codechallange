import Link from "next/link";
import Image from "next/image";
import Maskot from "../../../public/assets/maskot.png";

const Logo = () => {
  return (
    <div className="xl:px-20">
      <Link href={"/"}>
        <Image src={Maskot} alt="logo" className="w-12" />
      </Link>
    </div>
  );
};

export default Logo;

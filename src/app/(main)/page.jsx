import NewAraivel from "@/components/NewAraivel";
import Image from "next/image";
import hero from "../../../public/hero-bg.jpg"
import Featrued from "@/components/Featrued";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto space-y-6">
      
      <div className="relative h-[400px] md:h-[700px] w-full overflow-hidden ">
  
  <Image
    src={hero}
    alt="hero bg"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
    
    <div className="px-6 md:px-12 max-w-2xl">
      
      <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white leading-tight">
        
        <span className="block animate__animated animate__fadeInLeft">
          Discover Your
        </span>

        <span className="block text-success animate__animated animate__fadeInRight animate__delay-1s">
          Perfect Aesthetic
        </span>

      </h1>

      <p className="mb-6 text-gray-200 text-sm md:text-base animate__animated animate__fadeInDown animate__delay-1s">
        Explore our premium collection of tiles <br />
        crafted to bring elegance to your space.
      </p>

      <Link href="/allTiles">
        <button className="btn btn-success text-white font-semibold flex items-center gap-2 mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          Browse Now <FaArrowRight />
        </button>
      </Link>

    </div>

  </div>
</div>

      <NewAraivel />
      <Featrued />
    </div>
  );
}
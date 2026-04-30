import NewAraivel from "@/components/NewAraivel";
import Image from "next/image";
import hero from "../../../public/hero-bg.jpg"
import Featrued from "@/components/Featrued";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto space-y-1">
       <div
  className="hero ">
    <Image src={hero} alt="hero bg" width={1600}></Image>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold ">Discover Your <br />
      <span className="text-success">Perfect Aesthetic</span>
      </h1>
      <p className="mb-5 text-gray-200">
        Explore our premium collection of tiles <br /> crafted to bring elegance to your space.
      </p>
      <Link href={"/allTiles"}>
      <button className="btn btn-success text-white font-semibold text-md">Browse Now</button>
      </Link>
    </div>
  </div>
</div>
       <NewAraivel></NewAraivel>
       <Featrued></Featrued>
    </div>
  );
}

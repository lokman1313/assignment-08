
import { products } from "@/lib/allDataFetech";
import Image from "next/image";
import Link from "next/link";

const SingleTilePage = async ({params}) => {
    const {id} = await params;
    console.log(id)
    const datas = await products()
    const tile = datas.find(t=> t.id == id)
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <Image src={tile.image} alt="image" width={700} height={100}></Image>
    <div className="mx-4">
      <h1 className="text-5xl my-2 font-bold">{tile.title}</h1>
      <p className="text-lg font-semibold text-gray-600">{tile.description}</p>
      <div className="py-6 text-md font-semibold text-gray-500">
      <p className=""> Material : {tile.material}</p>
      <p className="">Dimensions : {tile.dimensions}</p>
      <p className="">Price : {tile.price}</p>
      <p className="">Stock : {tile.inStock=== true ? "Aveilable" : "Not Avelable"}</p>
      </div>
      <button ></button>
      <Link className="btn btn-primary" href={"/allTiles"}>Go To All Tiles</Link>
    </div>
  </div>
</div>
    );
};

export default SingleTilePage;
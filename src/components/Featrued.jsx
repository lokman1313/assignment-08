import Link from "next/link";
import SingleCard from "./singleCard/SingleCard";
import { products } from "@/lib/allDataFetech";


const Featrued = async () => {
    const product= await products();
    const tiles = product.slice(0,4);
   

    return (
        <div className="space-y-6 mt-6">
            <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Featrued Tiles</h2>
            <Link href={"/allTiles"}>
            <button className="btn btn-outline">View all</button>
            </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    tiles.map(tile => <SingleCard key={tile.id} tile={tile}></SingleCard>)
                }
            </div>
            
        </div>
    );
};

export default Featrued;
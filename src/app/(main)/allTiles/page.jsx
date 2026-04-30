import SingleCard from "@/components/singleCard/SingleCard";
import { products } from "@/lib/allDataFetech";

const AllTilesPage =async () => {
    const tiles= await products()
    return (
        <div className="container mx-auto">

            <div>
                <ul>
                    
                </ul>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                {
                    tiles.map(tile => <SingleCard key={tile.id} tile={tile}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default AllTilesPage;
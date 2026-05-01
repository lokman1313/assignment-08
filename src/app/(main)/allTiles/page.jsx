
import SearchBox from "@/components/SearchBox";
import SingleCard from "@/components/singleCard/SingleCard";
import { products } from "@/lib/allDataFetech";
import Link from "next/link";



const AllTilesPage =async ({searchParams}) => {   
    const {q} = await searchParams;
    const datas = await products()

    

    const tiles = datas.filter(tile => {
        
        const matchSearch = q
            ? tile.title.toLowerCase().includes(q.toLowerCase())
            : true;

        return matchSearch;
    });
    
    return (
        <div className="container mx-auto">

            <div className="my-5">
                <h2 className="text-3xl font-bold ml-3 mb-3">All Tiles </h2>
                <SearchBox></SearchBox>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {
                  tiles.length===0 ? (<div className="text-center py-20 px-5 rounded-2xl m-10 bg-gray-200"> <h2 className="text-2xl font-semibold">No tiles found 😕</h2>
                 <p className="text-gray-500 mt-2">Try searching with a different keyword or category</p></div>) 
                 : (tiles.map(tile => <SingleCard key={tile.id} tile={tile}></SingleCard>))
                }
            </div>
        </div>
    );
};

export default AllTilesPage;
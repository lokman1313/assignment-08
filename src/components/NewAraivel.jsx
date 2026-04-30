import { products } from "@/lib/allDataFetech";
import Marquee from "react-fast-marquee";


const NewAraivel = async () => {
    const product =await products()
    
    return (
        <div className="bg-gray-900 text-white p-3 rounded-2xl">
            <Marquee pauseOnHover={true}>
                {
                  product.map(tile => <h2 key={tile.id}>
                <span className="ml-3">New Arrivals: {tile.title} |</span>
                <span> Weekly Feature: Modern Geometric Patterns | Join the Community...</span>
                  </h2>)
                }
                
            </Marquee>
        </div>
    );
};

export default NewAraivel;
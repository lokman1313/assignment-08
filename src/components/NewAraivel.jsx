import { products } from "@/lib/allDataFetech";
import Marquee from "react-fast-marquee";


const NewAraivel = async () => {
    const product =await products()
    
    return (
        <div className="bg-gray-900 text-white p-3 ">
            <Marquee pauseOnHover={true}>
                {
                  product.map(tile => <h2 key={tile.id}>
                <span >New Arrivals: {tile.title}</span>
                <span className="mx-3">|</span>
                <span> Weekly Feature : Modern Geometric Patterns</span>
                <span className="mx-3">|</span>
                <span>Join the Community</span>
                <span className="mx-3">|</span>
                  </h2>)
                }
                
            </Marquee>
        </div>
    );
};

export default NewAraivel;
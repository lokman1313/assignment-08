import Image from "next/image";
import Link from "next/link";

const SingleCard = ({tile}) => {
    
    return (
        <div className="card bg-base-100 shadow-sm mx-4">
  <figure className="h-48">
  <Image 
    src={tile.image} 
    alt="tile" 
    width={300} 
    height={200} 
    className="w-full h-full object-cover"
  />
</figure>
  <div className="card-body">
    <h2 className="card-title">
      {tile.title}
      <div className="badge badge-success text-white">{tile.category}</div>
    </h2>
    <p>{tile.dimensions}</p>
    <p>Price : {tile.price}$</p>
    <Link href={`/tile/${tile.id}`}><button className="btn">View Deteils</button></Link>
  </div>
</div>
    );
};

export default SingleCard;
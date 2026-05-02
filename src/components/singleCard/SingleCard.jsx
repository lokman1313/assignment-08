import Image from "next/image";
import Link from "next/link";

const SingleCard = ({ tile }) => {
  return (
    <div className="card bg-base-100 shadow-sm mx-4 
    transition duration-300 ease-in-out 
    hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">

      <figure className="h-48 overflow-hidden">
        <Image
          src={tile.image}
          alt="tile"
          width={300}
          height={200}
          className="w-full h-full object-cover transition duration-300 hover:scale-110"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {tile.title}
          <div className="badge badge-success text-white">
            {tile.category}
          </div>
        </h2>

        <p>{tile.dimensions}</p>
        <p>Price : {tile.price}$</p>

        <Link href={`/tile/${tile.id}`}>
          <button className="btn mt-2 hover:scale-105 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
import Image from "next/image";
import hero from "../../../../public/hero-bg.jpg"
const user={
    name:"Md.lokman Hossen",
    id:102,
    email:"lokman@gmail.com"
    
}

const ProfilePage = () => {
    return (
        <div className="container mx-auto ">
            <h2 className="text-3xl font-bold">My Profile</h2>
            <div className="bg-base-200 rounded-3xl w-1/2 mx-auto flex flex-col justify-center items-center py-20 ">
              <Image src={hero} width={250} alt="hero" height={100}
              className="rounded-full "
              ></Image>
              <div className="mt-15">
                <h3 className="  text-gray-500">User ID : {user.id}</h3>
                <h3 className="text-lg text-gray-600">Name : {user.name}</h3>
                <h3 className="text-sm text-gray-600">Emsil : {user.email}</h3>
              </div>
            </div>
        </div>
    );
};

export default ProfilePage;
"use client"

import UpdateProfile from "@/components/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";


const ProfilePage = () => {
    
    const { data: session, isPending } = authClient.useSession();
    const userData = session?.user;

    
    if (isPending) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto ">
            <h2 className="text-3xl font-bold mt-10 ml-10">My Profile</h2>
            <div className="bg-base-200 rounded-3xl md:w-1/3 mx-auto flex flex-col justify-center items-center py-20 mt-10">
                

                <div className="ring-success ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                <Image src={userData.image} alt="logo" width={50} height={32}></Image>
                </div>
                
                
                <div className="my-6 text-center">
                    <h3 className="text-gray-500">User ID: {userData?.id}</h3>
                    <h3 className="text-lg text-gray-600 font-medium">Name: {userData?.name}</h3>
                    <h3 className="text-sm text-gray-600">Email: {userData?.email}</h3>
                </div>
                <UpdateProfile></UpdateProfile>
            </div>
        </div>
    );
};

export default ProfilePage;
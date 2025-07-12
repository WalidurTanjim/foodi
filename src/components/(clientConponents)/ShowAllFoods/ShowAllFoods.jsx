"use client"

import { usePathname } from "next/navigation";

const ShowAllFoods = () => {
    const pathname = usePathname();

    if(!pathname.includes('/foods')){
        return (
            <div className="mt-10 flex items-center justify-center">
                <button className="px-6 py-1.5 text-white bg-orange-500 hover:bg-orange-400 active:bg-orange-500 rounded-md">Show All Foods</button>
            </div>
        );    
    }else{
        return <></>
    }
};

export default ShowAllFoods;
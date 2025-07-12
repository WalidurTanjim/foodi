import Image from "next/image";
import Link from "next/link";

export const getSingleFood = async(id) => {
    const foodId = await id;
    try{
        const res = await fetch(`http://localhost:3000/api/items/${foodId}`);
        const data = await res.json();
        return data || {};
    }catch(err){
        console.error(err);
        return {};
    }
}

const SingleFoodDetails = async(props) => {
    const { _id } = await props?.params;
    const food = await getSingleFood(_id);
    // console.log("Single food details:", _id, food);

    return (
        <div>
            <div className='singleFoodDetails container mx-auto px-2 sm:px-6 lg:px-8'>
                <h1 className="text-center text-2xl md:text-3xl font-medium text-slate-700">Single food details</h1>

                <div className="relative w-full mt-10">
                    <Image src={food?.meal_thumb} width={100} height={100} alt={food?.meal_name} className="w-full h-[275px] rounded-md" />

                    <div className="mt-5">
                        <h1 className="text-xl font-medium text-slate-700">{food?.meal_name}</h1>
                        <p className="text-gray-500 py-2">{food?.meal_description}</p>

                        <Link href={`/foods`} className="px-6 py-1.5 text-white bg-orange-500 hover:bg-orange-400 active:bg-orange-500 rounded-md inline-block">Back to foods</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodDetails;
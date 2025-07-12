import Image from "next/image";
import Link from "next/link";

const SingleFood = async(props) => {
    const {food} = await props;
    // console.log(food)

    return (
        <Link href={`/${food?._id}`} key={food?._id}>
            <div className="relative group border border-gray-200 rounded-md transition-normal hover:shadow-lg transform hover:-translate-y-2.5">
                <Image src={food?.meal_thumb} width={100} height={100} alt={food?.meal_name} className="w-full h-[125px] rounded-t-md border-b border-b-gray-200" />

                <div className="p-2">
                    <h1 className="text-lg font-medium text-slate-700 group-hover:text-orange-500">{food?.meal_name}</h1>
                </div>
            </div>
        </Link>
    );
};

export default SingleFood;
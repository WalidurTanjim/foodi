import Image from "next/image";
import Link from "next/link";
import ShowAllFoods from "../(clientConponents)/ShowAllFoods/ShowAllFoods";
import SingleFood from "../SingleFood/SingleFood";

export const getFoods = async() => {
    try{
        const res = await fetch('http://localhost:3000/api/items');
        const data = await res.json();
        return data || [];
    }catch(err){
        console.error(err);
        return [];
    }
}

const Foods = async() => {
    const foods = await getFoods();
    // console.log("Foods:", foods);

    return (
        <section className="foods py-14">
            <h1 className="text-center text-2xl md:text-3xl font-medium text-slate-700">Our Foods</h1>

            <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    foods?.slice(0, 8)?.map(food => {
                        return (
                            <SingleFood key={food?._id} food={food} />
                        )
                    })
                }
            </div>

            <ShowAllFoods />
        </section>
    );
};

export default Foods;
// import category images
import salad from "../../../public/images/categories/salad.jpg";
import pizza from "../../../public/images/categories/pizza.jpg";
import soup from "../../../public/images/categories/soup.jpg";
import dessert from "../../../public/images/categories/dessert.jpg";
import drinks from "../../../public/images/categories/drinks.jpg";
import Image from "next/image";

const Categories = () => {
    return (
        <section className="categories py-14">
            <h1 className="text-center text-2xl md:text-3xl font-medium text-slate-700">Our Categories</h1>

            <div className="grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-10">
                <div className="relative text-center">
                    <Image src={salad} alt="Salad Image" width={90} height={90} className="w-[90px] h-[90px] rounded-full mx-auto ring-3 ring-gray-200 hover:ring-orange-500" />
                    <h1 className="text-slate-700 font-medium mt-3 text-sm">SALAD</h1>
                </div>

                <div className="relative text-center">
                    <Image src={pizza} alt="Salad Image" width={90} height={90} className="w-[90px] h-[90px] rounded-full mx-auto ring-3 ring-gray-200 hover:ring-orange-500" />
                    <h1 className="text-slate-700 font-medium mt-3 text-sm">PIZZA</h1>
                </div>

                <div className="relative text-center">
                    <Image src={soup} alt="Salad Image" width={90} height={90} className="w-[90px] h-[90px] rounded-full mx-auto ring-3 ring-gray-200 hover:ring-orange-500" />
                    <h1 className="text-slate-700 font-medium mt-3 text-sm">SOUP</h1>
                </div>

                <div className="relative text-center">
                    <Image src={dessert} alt="Salad Image" width={90} height={90} className="w-[90px] h-[90px] rounded-full mx-auto ring-3 ring-gray-200 hover:ring-orange-500" />
                    <h1 className="text-slate-700 font-medium mt-3 text-sm">DESSERT</h1>
                </div>

                <div className="relative text-center">
                    <Image src={drinks} alt="Salad Image" width={90} height={90} className="w-[90px] h-[90px] rounded-full mx-auto ring-3 ring-gray-200 hover:ring-orange-500" />
                    <h1 className="text-slate-700 font-medium mt-3 text-sm">DRINKS</h1>
                </div>
            </div>
        </section>
    );
};

export default Categories;
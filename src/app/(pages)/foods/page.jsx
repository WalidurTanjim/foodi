import SingleFood from "@/components/SingleFood/SingleFood";

export const getFoods = async() => {
    try{
        const res = await fetch('http://localhost:3000/api/items')
        const data = await res.json();
        return data || [];
    }catch(err){
        console.error(err);
        return []
    }
}

const FoodsPage = async() => {
    const foods = await getFoods();

    return (
        <div>
            <div className="foods container mx-auto px-2 sm:px-6 lg:px-8">
                <h1 className="text-center text-2xl md:text-3xl font-medium text-slate-700">Our Foods</h1>

                <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cold-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        foods?.map(food => <SingleFood key={food?._id} food={food} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodsPage;
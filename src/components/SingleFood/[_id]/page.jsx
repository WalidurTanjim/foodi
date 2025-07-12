export const getSingleFood = async(_id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/items/${_id}`)
        const data = await res.json();
        console.log("Single food details:", data);
        return data || {};
    }catch(err){
        console.error(err);
        return {};
    }
}

const FoodDetails = async(props) => {
    const { _id } = await props?.params;
    // const food = await getSingleFood(_id)
    console.log(_id)

    return (
        <div>
           <div className="singleFoodDetails container mx-auto px-2 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-medium text-slate-700 text-center">Single Food Details</h1>
           </div> 
        </div>
    );
};

export default FoodDetails;
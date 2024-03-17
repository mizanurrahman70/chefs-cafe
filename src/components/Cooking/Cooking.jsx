

const Cooking = ({Cook,l}) => {
 
    const {recipe_name,preparing_time,calories
    }=Cook
    return (
        <div className="flex gap-2 shadow-2xl bg-green-200 rounded-2xl text-gray-400 font-medium mb-5">
           <div className="flex justify-center items-center">
            <p className="ml-2 ">{l+1}</p>
           </div>
           <div className="ml-7">
            <p className="w-[112px]">{recipe_name}</p>
           </div>
           <div className="w-[w-68px]">
            <p>{preparing_time}</p>
            <p>minutes</p>
           </div>
           <div className="w-[w-68px]">
            <p>{calories}</p>
            <p>calories</p>
           </div>
           
        </div>
        
    );
};

export default Cooking;
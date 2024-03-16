

const Card = ({food,l,preparingHandle}) => {
    
    const{recipe_name,preparing_time,calories}=food
    return (
        <div className="flex gap-2 shadow-2xl">
           <div>
            <p>{l+1}</p>
           </div>
           <div>
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
           <div className="ml-20">
            <button onClick={()=>preparingHandle(food.recipe_id)} className="w-[115px] h-[38px] bg-green-700">Preparing</button>
           </div>
        </div>
    );
};

export default Card;
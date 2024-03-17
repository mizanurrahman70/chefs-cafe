

const Card = ({food,l,preparingHandle}) => {
    
    const{recipe_name,preparing_time,calories}=food
    return (
        <div className="flex gap-2 shadow-2xl text-[#878787] rounded-lg mb-5">
           <div>
            <p className="ml-2">{l+1}</p>
           </div>
           <div className="ml-7">
            <p className="w-[112px]">{recipe_name}</p>
           </div>
           <div className="w-[w-68px]">
            <p>{preparing_time}</p>
            <p >minutes</p>
           </div>
           <div className="w-[w-68px] ">
            <p >{calories}</p>
            <p className="mr-2">calories</p>
           </div>
           <div >
           <button onClick={()=>preparingHandle(food)} className="w-[90px] h-[30px] bg-green-700 text-white rounded-2xl">Preparing</button>
           </div>
        </div>
    );
};

export default Card;
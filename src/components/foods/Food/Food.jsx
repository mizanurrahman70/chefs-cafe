import { IoTimeOutline } from "react-icons/io5";
import { FaMugHot } from "react-icons/fa6";
const Food = ({Foods,CookHandle}) => {
   
    const {recipe_name,short_description,ingredients,preparing_time,calories,
cover_img
}=Foods
    return (
        <div>
          <div className="card w-full bg-base-100 shadow-x gap-5">
  <figure className="px-10 pt-10">
    <img src={cover_img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ml-4">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="text-[#878787]">{short_description}</p>
    <p className="text-2xl font-semibold">ingredients:{ingredients.length }</p>
    <ul className="text-[#878787] list-disc ml-4">
        {
           ingredients.map((int,l)=><li key={l}>{int}</li>)
        }
    </ul>
    <div className="flex justify-between text-[#878787]">
        <div className="flex gap-2 items-center">
        <IoTimeOutline></IoTimeOutline>
            <p><span>{preparing_time}</span>minutes</p>
        </div>
        <div className="flex gap-2 items-center text-[#878787]">
        <FaMugHot />
            <p><span>{calories}</span>caloris</p>
        </div>


    </div>
    <div className="card-actions">
      <button onClick={()=>CookHandle(Foods)} className="btn w-[170px] h-[49] bg-green-600">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Food;
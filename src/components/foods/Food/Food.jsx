import { IoTimeOutline } from "react-icons/io5";
import { FaMugHot } from "react-icons/fa6";
const Food = ({Foods,CookHandle}) => {
   
    const {recipe_name,short_description,ingredients,preparing_time,calories,
cover_img
}=Foods
    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cover_img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ml-4">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <p>ingredients:{ingredients.length }</p>
    <ul>
        {
           ingredients.map((int,l)=><li key={l}>{int}</li>)
        }
    </ul>
    <div className="flex justify-between">
        <div className="flex gap-2 items-center">
        <IoTimeOutline></IoTimeOutline>
            <p><span>{preparing_time}</span>minutes</p>
        </div>
        <div className="flex gap-2 items-center">
        <FaMugHot />
            <p><span>{calories}</span>caloris</p>
        </div>


    </div>
    <div className="card-actions">
      <button onClick={()=>CookHandle(Foods)} className="btn w-[170px] h-[49] bg-[#78D5E8]">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Food;
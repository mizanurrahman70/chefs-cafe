import CookTime from "../../CookU/CookTime";
import Card from "../../SlideCard/Card";
import Time from "../../sideTime/Time";


const Slider = ({food,preparingHandle,cook,time,calorie}) => {
   
    return (
        <div className="w-[500px] shadow-2xl ml-2">
            <div>
            <div>
                <h1 className="text-3xl font-extrabold text-center">Want to cook: <span>{food.length}</span></h1>
            </div>
            <hr />
            <div>
               <div className="flex gap-10 ml-16 text-[#878787] font-bold">
               <h1>Name</h1>
                <h1 className="ml-6">Time</h1>
                <h1>Calories</h1>
               
               </div>
               <div className="gap-4">
               {
                food.map((fd,l)=> <Card key={l} l={l} food={fd} preparingHandle={preparingHandle} ></Card>)
               }
               </div>
                 
               <div>
                <hr />
               </div>
            </div>
            </div>
            <div>
             <Time Cook={cook}></Time>
            </div>
            <div>
              <CookTime 
              time={time}
              calorie={calorie}></CookTime>
            </div>
        </div>
    );
};

export default Slider;
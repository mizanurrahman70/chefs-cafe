import Card from "../../SlideCard/Card";
import Time from "../../sideTime/Time";


const Slider = ({food,preparingHandle}) => {
   
    return (
        <div className="1/3">
            <div>
            <div>
                <h1 className="text-3xl font-extrabold">Want to cook: <span>{food.length}</span></h1>
            </div>
            <hr />
            <div>
               <div className="flex justify-around">
               <h1>Name</h1>
                <h1>Time</h1>
                <h1>Calories</h1>
                <h1>h</h1>
               </div>
               <div>
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
                <Time></Time>
            </div>
        </div>
    );
};

export default Slider;
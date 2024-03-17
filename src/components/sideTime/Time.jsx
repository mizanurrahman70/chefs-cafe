import Cooking from "../Cooking/Cooking";


const Time = ({Cook}) => {
    console.log(Cook)
    
    return (
        <div>
            <div>
                <h1 className="text-center text-3xl font-extrabold">Currently cooking: <span>{Cook.length}</span></h1>
            </div>
            <div>
            <div>
            <div>
               <div className="flex gap-10 ml-16 font-semibold text-gray-400 mt-5 mb-5">
                <h1>Name</h1>
                <h1 className="ml-6">Time</h1>
                <h1>Calories</h1>
               </div>
               <div>
               
           {
                 Cook.map((ck,l)=><Cooking Cook={ck} key={l} l={l}></Cooking>)
           }
               </div>
               </div>
                </div>
                <div>
                    
                </div>
              </div>
            
        </div>
    );
};

export default Time;
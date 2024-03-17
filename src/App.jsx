import Foods from './components/foods/Foods'
import Banner from './components/Banner/Banner'
import Header from './components/Header'
import Slider from './components/foods/Slider/Slider'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipes from './components/Recipes/Recipes'
import Footer from './components/Footer/Footer'


function App() {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [food,setFood]=useState([])
 const CookHandle=(Food)=>{
  const newFood=[...food,Food]
 const isInclude= food.find(f=>f.recipe_id  === Food.recipe_id)
  
  if(!isInclude){
  setFood(newFood)
 }
 
 else{
toast.success('already Have')
 }

}
const [cook,setCook]=useState([])
const [time,setTime]=useState(0)
const [calorie,setCalorie]=useState(0)

//  remove proucess 
const preparingHandle=(rmb)=>{
  const timeP=parseInt(rmb.preparing_time)
  const times=time+timeP

  const caloriP=parseInt(rmb.calories)
  const calories =calorie+caloriP
  setCalorie(calories)
  setTime(times)
  const newCook=[...cook,rmb]
  setCook(newCook)
  const remove=food.filter(r=>r.recipe_id !== rmb.recipe_id)
    setFood(remove)
  
}

  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <Recipes></Recipes>
     <div className='flex mt-10'>
      <Foods CookHandle={CookHandle}></Foods>
      <Slider food={food} 
      preparingHandle={preparingHandle}
      cook={cook}
      time={time}
      calorie={calorie}></Slider>
     </div>
     <ToastContainer></ToastContainer>
     <Footer></Footer>
    </>
  )
}

export default App

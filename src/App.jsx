import Foods from './components/foods/Foods'
import Banner from './components/Banner/Banner'
import Header from './components/Header'
import Slider from './components/foods/Slider/Slider'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
//  remove proucess 
const preparingHandle=(rmb)=>{
  console.log(rmb)
  const remove=food.filter(r=>r.recipe_id !== rmb)
    setFood(remove)
  
}
  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <div className='flex'>
      <Foods CookHandle={CookHandle}></Foods>
      <Slider food={food} 
      preparingHandle={preparingHandle}></Slider>
     </div>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App

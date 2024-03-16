import Foods from './components/foods/Foods'
import Banner from './components/Banner/Banner'
import Header from './components/Header'
import Slider from './components/foods/Slider/Slider'

function App() {
  

  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <div className='flex'>
      <Foods></Foods>
      <Slider></Slider>
     </div>
    
    </>
  )
}

export default App

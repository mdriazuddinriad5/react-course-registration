import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  const [cartTitle, setCartTitle] = useState([]);
  const [coursePrice, setCoursePrice]= useState(0);
  const [courseCredit, setCourseCredit]= useState(0);

  const handleSelect = (title,price,credit) => {
    const newCartTitle = [...cartTitle, title]
    setCartTitle(newCartTitle);
    console.log(title)

    const newPrice= coursePrice+price;
    setCoursePrice(newPrice);
    console.log(price);

    const newCredit= courseCredit+credit;
    setCourseCredit(newCredit);
    console.log(credit);
  }

  return (

    <div>
      <Header></Header>
      <div className='flex gap-6 w-11/12 mx-auto'>
        <Courses handleSelect={handleSelect}></Courses>
        <Carts cartTitle={cartTitle} courseCredit={courseCredit} coursePrice={coursePrice}></Carts>
      </div>

    </div>
  )
}

export default App

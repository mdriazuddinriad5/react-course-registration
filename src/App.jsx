import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [cartTitle, setCartTitle] = useState([]);
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseCredit, setCourseCredit] = useState(0);

  const handleSelect = (title, price, credit) => {
    const newCartTitle = [...cartTitle, title]
    const newPrice = coursePrice + price;
    const newCredit = courseCredit + credit;

    const isExist = cartTitle.find(item => item === title);
    if (isExist) {
      toast.warn('You have already added this item',{
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: true,
        theme: 'dark'
      })
    }else if (newCredit > 20) {
      toast.error('You cannot exceed 20 credits', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: true,
        theme: 'dark'
      });
    }
    
    else {
      setCartTitle(newCartTitle);
      setCoursePrice(newPrice);
      setCourseCredit(newCredit);
    }
    
    
  }

  return (

    <div>
      <Header></Header>
      <div className='lg:flex flex-col lg:flex-row gap-6 w-11/12 mx-auto'>
        <Courses handleSelect={handleSelect}></Courses>
        <Carts cartTitle={cartTitle} courseCredit={courseCredit} coursePrice={coursePrice}></Carts>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default App

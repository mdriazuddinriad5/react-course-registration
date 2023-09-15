import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {


  return (

      <div>
        <Header></Header>
        <div className='flex gap-6 w-11/12 mx-auto'>
          <Courses></Courses>
          <Carts></Carts>
        </div>

      </div>
  )
}

export default App

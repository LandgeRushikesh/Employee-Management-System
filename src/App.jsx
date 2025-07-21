import './App.css'
import Login from './Components/Auth/Login'
import Admin from './Components/Dashboard/Admin'
import Employee from './Components/Dashboard/Employee'

function App() {

  return (
    <>
      <div className='w-full h-screen bg-black text-white'>
        {/* <Login /> */}
        {/* <Employee /> */}
        <Admin />
      </div>
    </>
  )
}

export default App

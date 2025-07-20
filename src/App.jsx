import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/Employee'

function App() {

  return (
    <>
      <div className='bg-black text-white'>
        {/* <Login /> */}
        <Employee />
      </div>
    </>
  )
}

export default App

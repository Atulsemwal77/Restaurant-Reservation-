import "./App.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Success from './Pages/Success'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element= {<Success/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        <ToastContainer theme="colored" />
    </Router>
  )
}
export default App;
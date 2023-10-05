
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import About from "./pages/about"
import Profile from "./pages/profile"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<PrivateRoute/>}/>

      
      

    </Routes>
    </BrowserRouter>
  )
}

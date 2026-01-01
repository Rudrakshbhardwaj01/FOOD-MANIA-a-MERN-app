import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Home from "./pages/home"
import Success from "./pages/success"
import NotFound from "./pages/notFound"
const App = () => {
  return <Router><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Toaster/>
  </Router>
}

export default App
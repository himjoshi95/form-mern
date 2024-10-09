import Home from "./pages/Home"
import TestPaper from "./pages/TestPaper"
import Training from "./pages/Training"

import { Route,Routes } from "react-router-dom"


function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/training/:masterId' element={<Training />}></Route>
      <Route path='/test/:userId' element={<TestPaper/>}></Route>
    </Routes>
    
  </>
 
}

export default App

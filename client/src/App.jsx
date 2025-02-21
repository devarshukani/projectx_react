import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import TestDetails from "./component/TestDetails";
import Test from "./component/Test";



function App() {

  return (
    <div className="bg-[#f7f7f7] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />}/>
        <Route path="/testinfo" element={<TestDetails/>}/>

      </Routes>
    </div>
  )
}

export default App

import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import TestDetails from "./component/TestDetails";
import Test from "./component/Test";
import Video from "./component/Videos";
import TestScreen from "./component/TestScreen";
import TestResult from "./component/TestResult";

function App() {
  return (
    <div className="bg-[#f7f7f7] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testinfo" element={<TestDetails />} />

        <Route path="/test/testscreen" element={<TestScreen />} />
        <Route path="/test/result" element={<TestResult/>}/>
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;

import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <>
      <Router>
        <h1 className="w-screen h-screen items-center flex justify-center font-bold text-3xl bg-cover">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </h1>
      </Router>
    </>
  );
};

export default App;

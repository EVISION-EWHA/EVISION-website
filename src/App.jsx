import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="/" element={<Login></Login>} />
    </Routes>
  );
};

export default App;

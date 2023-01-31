import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/" element={<Login></Login>} />
    </Routes>
    
  );
};

export default App;

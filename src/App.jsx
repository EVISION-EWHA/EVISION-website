import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";
import UserList from "pages/userList/userList";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="/" element={<Login></Login>} />
      <Route path="/admin" element={<UserList></UserList>} />
    </Routes>
  );
};

export default App;

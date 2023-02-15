import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";
import MainPage from "pages/Main/MainPage";
import CurriculumPage from "pages/Curriculum/CurriculumPage";
import Post from "pages/board/post";
import UserList from "pages/userList/userList";
import Header from "components/header";
import Footer from "components/footer";
import ApplyInfo from "pages/Apply/ApplyInfo";
import ApplyForm from "pages/Apply/ApplyForm";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/main" element={<MainPage></MainPage>} />
        <Route path="/curriculum" element={<CurriculumPage></CurriculumPage>} />
        <Route path="/admin" element={<UserList></UserList>} />
        <Route path = "/Applyinfo" element = {<ApplyInfo></ApplyInfo>}/>
        <Route path = "/Applyform" element = {<ApplyForm></ApplyForm>}/>

      </Routes>
      <Footer />
    </>
  );
};

export default App;

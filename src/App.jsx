import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";
import MainPage from "pages/Main/MainPage";
import CurriculumPage from "pages/Curriculum/CurriculumPage";
import Post from "pages/board/post";
<<<<<<< HEAD
=======
import PostMain from "pages/Post/PostMain";
import PostView from "pages/Post/PostView";
import PostList from "pages/Post/PostList";
>>>>>>> 5e76fbadafba0246fea9784958dace90f638ae0e
import Header from "components/header";
import Footer from "components/footer";
import ApplyInfo from "pages/Apply/ApplyInfo";
import ApplyForm from "pages/Apply/ApplyForm";
import Admin from "pages/Admin/Admin";



const App = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  let [names, setNames] = React.useState("");
  let [grade, setGrade] = React.useState(0);
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route
          path="/login"
          element={<Login></Login>}
        />
        <Route path="/signup" element={<Signup></Signup>} />
<<<<<<< HEAD
        <Route path="/main" element={<MainPage></MainPage>} />
        <Route path="/board" element={<Post></Post>} />
        <Route path="/curriculum" element={<CurriculumPage></CurriculumPage>} />
        {/* <Route path="/admin" element={<UserList></UserList>} /> */}
        <Route path = "/Applyinfo" element = {<ApplyInfo></ApplyInfo>}/>
        <Route path = "/Applyform" element = {<ApplyForm></ApplyForm>}/>

=======
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/curriculum" element={<CurriculumPage></CurriculumPage>} />
        <Route path="/postview/:no" element={<PostView></PostView>} />
        <Route path="/postmain" element={<PostMain></PostMain>} />
        <Route path="/postlist" element={<PostList></PostList>} />
        <Route path="/admin"element={<Admin></Admin>} />
        <Route path="/Applyinfo" element={<ApplyInfo></ApplyInfo>} />
        <Route path="/Applyform" element={<ApplyForm></ApplyForm>} />
>>>>>>> 5e76fbadafba0246fea9784958dace90f638ae0e
      </Routes>
      <Footer />
    </>
  );
};

export default App;

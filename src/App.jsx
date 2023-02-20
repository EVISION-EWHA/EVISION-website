import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";
import MainPage from "pages/Main/MainPage";
import CurriculumPage from "pages/Curriculum/CurriculumPage";
// import Post from "pages/board/post";
import Header from "components/header";
import Footer from "components/footer";
import ApplyInfo from "pages/Apply/ApplyInfo";
import ApplyForm from "pages/Apply/ApplyForm";
import Admin from "pages/Admin/Admin";
import MyPage from "pages/Modify/MyPage";
import Modify from "pages/Modify/Modify";
import Showingapplicant from "pages/Admin/ShowingApplicant";
import Application from "pages/Admin/Application";
import RegisterPage from "components/views/RegisterPage/Sections/RegisterOrEdit";
import ArticlePage from "components/views/ArticlePage/ArticlePage";
import BoardPage from "components/views/BoardPage/BoardPage";

const App = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/curriculum" element={<CurriculumPage></CurriculumPage>} />
        <Route path="/view" element={<BoardPage></BoardPage>} />
        <Route path="/article/:articleId" element={<ArticlePage></ArticlePage>} />
        <Route path="/edit/:articleId" element={<RegisterPage></RegisterPage>} />
        <Route path="/board" element={<RegisterPage></RegisterPage>} />
        {/* <Route path="/board" element={<Post></Post>} /> */}
        <Route path="/admin" element={<Admin></Admin>} />
        <Route
          path="/admin/showingapplicant"
          element={<Showingapplicant></Showingapplicant>}
        />
        <Route
          path="/admin/applications/:studentId"
          element={<Application></Application>}
        />
        <Route path="/recruit" element={<ApplyInfo></ApplyInfo>} />
        <Route path="/applyform" element={<ApplyForm></ApplyForm>} />
        <Route path="/mypage" element={<MyPage></MyPage>} />
        <Route path="/modify" element={<Modify></Modify>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import NotFound from "pages/notFound";
import MainPage from "pages/Main/MainPage";
import Header from "components/header";
// import { useState, useCallback } from "react";
import Landing from "pages/landing";
import Footer from "components/footer";
import Login from "pages/login/Login";

const LandingRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        {/*}
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/*" element={<NotFound />} />  */}
      </Routes>
      <Footer />
    </>
  );
};

export default LandingRoutes;

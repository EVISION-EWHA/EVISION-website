import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";
import Post from "pages/board/post";
// import PostMain from "pages/Post1/PostMain";
// import PostView from "pages/Post/PostView";
// import PostList from "pages/Post1/PostList";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/main" element={<MainPage></MainPage>} />
        <Route path="/curriculum" element={<CurriculumPage></CurriculumPage>} />
        {/* <Route path="/postview/:no" element={<PostView></PostView>} />
        <Route path='/postmain' element={<PostMain></PostMain>}/>
        <Route path='/postlist' element={<PostList></PostList>}/> */}
        <Route path="/admin" element={<UserList></UserList>} />
      </Routes>
      <Footer />
    </>
     );
};

export default App;

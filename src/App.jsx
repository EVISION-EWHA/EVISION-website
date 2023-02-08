import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";
import Post from "pages/board/post";
import PostMain from "pages/Post1/PostMain";
import PostView from "pages/Post/PostView";
import PostList from "pages/Post1/PostList";


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<Signup></Signup>} />
      <Route path="/post" element={<Post></Post>} />
      <Route path="/postview/:no" element={<PostView></PostView>} />
      <Route path='/postmain' element={<PostMain></PostMain>}/>
      <Route path='/postlist' element={<PostList></PostList>}/>
      <Route path="/" element={<Login></Login>} />
    </Routes>
  );
};

export default App;

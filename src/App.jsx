import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ApplyInfo from "components/applyInfo";
//import ApplyForm from "components/applyInfo";

const App = ()=>{
    return(
      <Routes>
          <Route path = "/applyInfo" element = {<ApplyInfo />} />
      </Routes>
      
    );
};

export default App;

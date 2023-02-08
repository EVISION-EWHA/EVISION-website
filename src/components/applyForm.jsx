//지원서 작성 폼 
//mport {Redirect} from 'react-router-dom';
//import { useHistory } from "react-router-dom";

function applyForm() {
    // 만약 완전 제출하기 전에 확인
    return (
    <div className = "ApplyForm">
            <h2>지원서 작성</h2>
    <form style = {{
        display: "flex", 
        flexDirection: "column", 
        backgroundColor : "lightgray",
        padding : "20px",
        margin : "center",
    }}>
        <label>문항 1 : </label>
        <input></input>    
        <index>문항 2</index>
        <input></input> 
        <index>문항 3</index>
        <input></input> 
    </form>
    
    <button  type = "button" onClick="location.href = 'home.jsx'" style = {{
    padding : "5px",
    }}>제출하기</button>
    </div>
    );
    };
    
    export default applyForm;
    
    /*
    <input type = "checkbox" id="ok">개인정보수집에 동의하시겠습니까?</input>
    
    <script>
    $("input:checkbox[id='ok']).prop("checked",true);
    $("input:checkbox[id='ok']).prop("checked",true);
    </script>
    */
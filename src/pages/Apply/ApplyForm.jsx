//실제 지원 폼
import React, {useState}  from "react";
import "./apply.css";

function ApplyForm() {
    
    const [state,setState] = useState({
        q1 : "",
        q2 : "",
    });

    const handleChange = (e)=>{ // 작성내용 객체에 저장 
            console.log(e.target.name);
            console.log(e.target.value);

            setState({
                    ...state,
                    [e.target.name] : e.target.value,
            });

            //글자수 제한 
            var content = e.target.value;
            if(content.length === 500)
            alert("최대 600자까지 입력가능합니다.");
    
            if(content.length === 600)
            alert("최대 600자까지 입력가능합니다.");
            return;
    };
    
    // 버튼 {제출하기}
    function handleSubmit(){
            alert("지원이 완료되었습니다.")
            window.location.href = './home';
    }
    
return(
    <div className = "ApplyForm">
        <h2>EVI$ION 지원서 작성</h2>
        <form className = "mainform">
            
            <label>1. 자신이 몰입해서 공부해본 분야가 있나요? 있다면 어떤 분야였고, 결과는 어땠으며, 그 과정을 통해 무엇을 얻었는 지 이야기해주세요. 꼭 보안이 아니어도 좋습니다. (최대 600자)</label> 
            <textArea
                name = "q1"
                value = {state.q1}
                onChange = {handleChange}
                placeholder = "내용을 입력해주세요" 
                maxLength = {600} /> <br/>
            {/* <span style={{fontSize : "small"}} id="counter">(0 / 최대 600자)</span> */}

            <label>2. EVI$ION에서 특히 공부해보고 싶은 활동이나 분야가 있나요? (최대 600자) </label>
            <textArea  
                name = "q2"
                value = {state.q2}
                onChange={handleChange}
                placeholder = "내용을 입력해주세요"
                maxLength = {600}/><br /> 

        </form>

        <button type = "button" onClick={()=>{handleSubmit()}}>제출하기</button>
    </div>
);
};

export default ApplyForm;



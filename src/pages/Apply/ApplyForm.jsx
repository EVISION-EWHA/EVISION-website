//실제 지원 폼
// import React, {useRef, useState}  from "react";
import "./apply.css";


function ApplyForm() {

    function handleSubmit(){
        var isChecked = document.getElementById('checkAgree').checked;
        if(!isChecked){
            alert("개인정보 수집에 동의해주세요!!");
            return false;
        }
        alert("지원이 완료되었습니다!");
        window.location.href = './home';
    }
    

return(
    <div className = "ApplyForm">
        <h2>EVI$ION 지원서 작성</h2>
        <form className = "mainform">
            
            <label>자신이 몰입해서 공부해본 분야가 있나요? 있다면 어떤 분야였고, 결과는 어땠으며, 그 과정을 통해 무엇을 얻었는 지 이야기해주세요. 꼭 보안이 아니어도 좋습니다. (최대 600자)</label> 
            <textArea placeholder = "내용을 입력해주세요" /> <br/>
            <index />EVI$ION에서 특히 공부해보고 싶은 활동이나 분야가 있나요? (최대 600자)
            <textArea placeholder = "내용을 입력해주세요"/><br /> 

        </form>

        <p name = "checkout"><input type="checkbox" name = "isAgee" id= "checkAgree" value=""/> 개인정보 수집에 동의하시겠습니까? <br />
        </p><br />

        <button type = "button" onClick ={()=>{handleSubmit()}}>제출하기</button>
    </div>
);
};

export default ApplyForm;


//실제 지원 폼
// import React, {useRef, useState}  from "react";
import "./apply.css";


function ApplyForm() {

    function handleSubmit(){
        // var isChecked = document.checkout.isAgree.checked;
        // if(isChecked){
        //     alert("개인정보 수집에 동의해주세요!!");
        //     return false;
        // }
        alert("지원이 완료되었습니다!");
    }
    

return(
    <div className = "ApplyForm">
        <h2>EVI$ION 지원서 작성</h2>
        <form className = "mainform">
            <label />1.	목표를 세우고 이를 달성하기 위해 노력한 경험이 있나요? 그 과정을 통해 무엇을 얻었나요? (500자 이내로 작성)
            <textArea placeholder = "내용을 입력해주세요" /> <br/>
            <index />2. 동아리 활동으로 얻어가고 싶은 것이 있나요?  어떤 것인지 구체적으로 서술해주세요.
            <textArea placeholder = "내용을 입력해주세요"/><br />
            <index>3. 동아리 활동과 보안 공부에 시간을 얼마나 투자하실 수 있나요?</index>
            <textArea placeholder = "내용을 입력해주세요"/> <br/>
        </form>

        <form name = "checkout"><input type="checkbox" name = "isAgee" id= "checkAgree" value=""/> 개인정보 수집에 동의하시겠습니까? <br />
        </form><br />

        <button type = "button" onClick ={()=>{handleSubmit()}}>제출하기</button>
    </div>
);
};

export default ApplyForm;


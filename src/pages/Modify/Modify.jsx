//mypage페이지에서 넘어가는 modal같은 페이지
// 실질적 수정페이지라 보면 됨

import React, { useRef,useState}  from "react";
import axios from "axios";
import "./mypage.css";
import { API } from "../../config";
import {useLocation} from "react-router-dom";

function Modify(){
    const location = useLocation();
    
    const pwInput = useRef();
    const rePwInput = useRef();
    //mypage에서 받은 state 전달
    

    const [ state, setState]=useState({
        userPw : localStorage.getItem("userPw"),
        userRePw : "",
        email : "",
    }); 


    console.log('지금상태',state);
    

    
    const handleChange = (e)=>{ // 작성내용 객체에 저장 
        // console.log(e.target.name);
        // console.log(e.target.value);

        setState({
                ...state,
                [e.target.name] : e.target.value,
        });
    };


    //이거는 데이터 전송
    const onhandlePost = async (data) => {
        const { userPw, email } = data;
        const postData = { userPw, email };
        postData.userPw = data.userPw;
        postData.email = data.email;
        
        try {
        await axios
            .put(`${API.Modification}`, postData)
            .then((res) => {
                console.log(res);
                let submitBtn = document.getElementById("submit");
                submitBtn.addEventListener("click", function (e) {
                this.setAttribute("disabled", "true");
                this.setAttribute("disabledElevation", "true");
                this.setAttribute("disabledRipple", "true");
                });
                const test = res.data;
                console.log(test);
                alert("수정이 완료되었습니다!");
                // window.location.reload();
            });
        } catch(err) {
            console.log(err);
        }
    };




//이거는 제출버튼
    const handleSubmit = (event)=>{
        // event.preventDefault();
        console.log("change submit");

        //여기서 유효성 검사 
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/; // 비밀번호 유효성
        if(!passwordRegex.test(state.userPw)){
            pwInput.current.focus();
            alert("영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 설정해주세요. ");   
            return false;
        }

        if(state.userPw !== state.userRePw){
            rePwInput.current.focus();
            alert("비밀번호가 일치하지 않습니다!");
            return false;

        }

        if(state.email === null){
            state.email = location.state.email;
            console.log(state.email);
        }

        if(passwordRegex.test(state.userPw) && (state.userPw === state.userRePw)){
            //이거는 막바지 작업
            const modifyData={
                userPw : state.userPw,
                email : state.email,
            };
        console.log("modifyData", modifyData);
        onhandlePost(modifyData);
        }
    };


    return (
        <div className = "Modify">
            <br/><h2 style = {{ textAlign : "center", fontSize : "35px", color : "white", backgroundColor : "black"}}>수정 페이지</h2>
            <form>
            <label>아이디</label>
            <label>
                {localStorage.getItem("userId")}<br />
            </label><br/>

            <label> 현재 비밀번호 </label>
            <label>
            {localStorage.getItem("userPw")}
            </label><br />

            <label> 새로운 비밀번호 </label>
            <input
                ref = {pwInput}
                name = "userPw"
                value = {state.userPw}
                onChange={handleChange} 
                placeholder = " 영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 설정해주세요."></input><br/>

            <label>비밀번호 확인</label>
            <input
                ref = {rePwInput}
                name = "userRePw"
                value = {state.userRePw}
                onChange={handleChange} 
                placeholder = "동일한 비밀번호를 입력해주세요."></input><br/>

            <label> 이메일</label>
            <input
                name = "email"
                value = {state.email}
                onChange={handleChange} 
                placeholder = "수정할 이메일을 입력해주세요!"></input><br/>

            <button onClick = {()=>{handleSubmit()}}>수정하기</button>
        </form>
        </div>
    );
}

export default Modify;

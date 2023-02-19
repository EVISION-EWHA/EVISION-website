//mypage페이지에서 넘어가는 modal같은 페이지
// 실질적 수정페이지라 보면 됨

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./mypage.css";

function Modify(){
    // const location = useLocation();
    const [newuserPw, setUserPw] = React.useState("");
    const [newemail, setEmail] = React.useState("");

    const onhandlePost = async (data) => {
        const { userPw, email } = data;
        const postData = { userPw, email };
        postData.userPw = data.userPw;
        postData.email = data.email;

        try {
        await axios
            .put("http://3.37.117.164:8080/users/test1", postData)
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

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("change submit");
        const modifyData={
            userPw : newuserPw,
            email : newemail,
        };
        console.log("modifyData", modifyData);
        onhandlePost(modifyData);
    };
    const handlePwChange = (event) => {
        setUserPw(event.target.value);
    };

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

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
                name = "userPw"
                value = {newuserPw}
                onChange={handlePwChange} 
                placeholder =  {localStorage.getItem("userId")}></input><br/>


            <label> 이메일</label>
            <input
                name = "email"
                value = {newemail}
                onChange={handleEmailChange} 
                placeholder =  {localStorage.getItem("email")}></input><br/>

            <button onClick = {()=>{handleSubmit()}}>수정하기</button>
        </form>
        </div>
    );
}

export default Modify;
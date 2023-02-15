import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";

function Signup() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setinputPw] = useState("");
  const [inputRePw, setInputRePw] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputPhone, setinputPhone] = useState("");
  const [inputName, setinputName] = useState("");

  const [passwordState, setPasswordState] = useState(""); //비밀번호 입력
  const [passwordError, setPasswordError] = useState(""); //비밀번호 재입력

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setinputPw(e.target.value);
  };
  const handleInputRePw = (e) => {
    setInputRePw(e.target.value);
  };
  const handleInputEmail = (e) => {
    setinputEmail(e.target.value);
  };
  const handleInputName = (e) => {
    setinputName(e.target.value);
  };
  const handleInputPhone = (e) => {
    setinputPhone(e.target.value);
  };

  const onhandlePost = async (data) => {
    const { userId, userPw, email } = data;
    const postData = { userId, userPw, email };
    postData.userId = data.userId;
    postData.userPw = data.userPw;
    postData.email = data.email;
    // postData.userName = data.userName;
    // postData.userPhone = data.userPhone;
    console.log("postdata", postData);

    await axios
      .post("http://3.37.117.164:8080/signup", postData)
      .then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
          console.log("클릭성공");
        });
        const status = res.data;
        console.log(status);
        if (status === 0) {
          console.log("회원가입 성공");
          alert("회원가입을 성공했습니다");
        } else if (status === -1) {
          console.log("회원가입 실패(아이디 중복)");
          alert("이미 존재하는 아이디입니다");
        }
        // navigate('/');
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click signup");
    const joinData = {
      userId: inputId,
      userPw: inputPw,
      email: inputEmail,
      //userName: inputName,
      //userPhone: inputPhone,
    };

    console.log("joinData", joinData);

    // 비밀번호 유효성 체크
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(joinData.userPw)) {
      setPasswordState(
        " 영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 설정해주세요."
      );
    } else setPasswordState("");

    if (passwordRegex.test(joinData.userPw) && joinData.userPw === inputRePw)
      setPasswordError("비밀번호가 일치하지 않습니다.");
    else setPasswordError("");

    if (joinData.userPw === inputRePw) {
      onhandlePost(joinData);
    }
  };

  const hstyle = {
    display: "flex",
    justifContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "7rem 0 5rem 0",
    padding: "5rem 0 5rem 0",
    flexDirection: "column",
    fontSize: "30px",
  };

  return (
    <form style={hstyle} onSubmit={handleSubmit}>
      <Stlabel>Id</Stlabel>
      <StInput
        value={inputId}
        onChange={handleInputId}
        type="text"
        id="userId"
        name="id"
        required
        autoComplete="id"
        autoFocus
      />
      <Stlabel>Password</Stlabel>
      <form>
        <StInput
          value={inputPw}
          onChange={handleInputPw}
          type="password"
          id="userPassword"
          name="password"
          error={passwordState !== "" || false}
          autoComplete="new-password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
        />
      </form>
      <Stlabel>RePassword</Stlabel>
      <StInput
        value={inputRePw}
        onChange={handleInputRePw}
        type="password"
        name="rePassword"
        placeholder="비밀번호 재입력"
        error={passwordError !== "" || false}
        autoComplete="new-password"
        id="userRePassword"
      />
      <Stlabel>Email</Stlabel>
      <StInput
        value={inputEmail}
        onChange={handleInputEmail}
        type="email"
        id="userEmail"
        name="email"
      />
      <Stlabel>이름</Stlabel>
      <StInput
        value={inputName}
        onChange={handleInputName}
        type="text"
        id="userPhone"
        name="name"
      />
      <Stlabel>전화번호</Stlabel>
      <StInput
        value={inputPhone}
        onChange={handleInputPhone}
        type="tel"
        id="phone"
        name="phone"
        placeholder="예) 010-1111-2222"
      />
      <br />
      <StSignupBtn id="submit" name="submit" type="submit">
        회원가입
      </StSignupBtn>
    </form>
  );
}
export default Signup;

// const StSignup = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   margin: 7rem 0 5rem 0;
//   padding: 5rem 0 5rem 0;
//   flex-direction: column;
//   font-size: 30px;
// `;

const Stlabel = styled.div`
  width: 40rem;
  margin: 3rem 0 1rem 0;
  align-content: space-between;
  flex-direction: row;
  font-size: 2.7rem;
`;

const StInput = styled.input`
  font-size: 2rem;
  width: 40rem;
  height: 5rem;
`;

const StSignupBtn = styled.button`
  display: flex;
  width: 140px;
  height: 50px;
  border: 2px solid #34495e;
  justify-content: center;
  float: left;
  align-items: center;
  background-color: white;
  font-size: 2rem;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  padding: 0.2rem 0 0.2rem 0;

  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: #00462a;
    color: white;
  }
`;

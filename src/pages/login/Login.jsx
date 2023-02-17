import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login({ setIsLogin }) {
  const [inputId, setInputId] = useState("");
  const [inputPw, setinputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setinputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
  };

  const navigate = useNavigate();

  const onhandlePost = async (data) => {
    const { userId, userPw } = data;
    const postData = { userId, userPw };
    postData.userId = data.userId;
    postData.userPw = data.userPw;
    try {
      await axios
        .post("http://3.37.117.164:8080/login", postData)
        .then((res) => {
          console.log(res);
          let submitBtn = document.getElementById("submit");
          submitBtn.addEventListener("click", function (e) {
            this.setAttribute("disabled", "true");
            this.setAttribute("disabledElevation", "true");
            this.setAttribute("disabledRipple", "true");
          });
          //navigate("/");
          const status = res.data;
          console.log(status);
          if (status === 1 || status === 5) {
            setIsLogin(true);
            console.log("login 성공");
            alert("login 성공");
            navigate("/");
          } else if (status === 0) {
            setIsLogin(false);
            console.log("login실패. 대기 상태");
            alert("가입 요청이 아직 승인되지 않았습니다.");
          } else if (status === 2) {
            setIsLogin(false);
            console.log("login실패. 거부당함");
            alert("가입 요청이 거부되었습니다");
          } else if (status === -1) {
            setIsLogin(false);
            console.log("login실패. 비밀번호 오류");
            alert("올바른 비밀번호가 아닙니다. 다시 입력해 주세요");
          } else if (status === -2) {
            setIsLogin(false);
            console.log("login실패. 아이디가 존재하지 않음");
            alert("존재하는 아이디가 아닙니다. 다시 입력해 주세요");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click login");
    const loginData = {
      userId: inputId,
      userPw: inputPw,
    };
    console.log("loginData", loginData);
    onhandlePost(loginData);
  };

  const hstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "10rem 0 5rem 0",
    padding: "5rem 0 5rem 0",
    flexDirection: "column",
    fontSize: "30px",
  };

  return (
    <form style={hstyle} onSubmit={handleSubmit}>
      <Stlabel>
        Id
        <StInput
          type="text"
          id="userId"
          name="id"
          onChange={handleInputId}
          value={inputId}
          autoComplete="id"
        />
      </Stlabel>
      <Stlabel>
        Password
        <form>
          <StInput
            name="password"
            type="password"
            id="userPw"
            value={inputPw}
            onChange={handleInputPw}
            autoComplete="new-password"
          />
        </form>
      </Stlabel>
      <br />
      <StLoginBtn type="submit" id="submit" onClick={onClickLogin}>
        로그인
      </StLoginBtn>
    </form>
  );
}
export default Login;

const form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10rem 0 5rem 0;
  padding: 5rem 0 5rem 0;
  flex-direction: column;
  font-size: 30px;
`;

const Stlabel = styled.label`
  width: 40rem;
  margin: 4rem 0 2rem 1rem;
  padding: 0 0 0 1rem;
  flex-direction: row;
  font-size: 3rem;
`;

const StInput = styled.input`
  font-size: 2rem;
  width: 40rem;
  height: 5rem;
`;

const StLoginBtn = styled.button`
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

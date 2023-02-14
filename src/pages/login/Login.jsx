import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login({ setIsLogin }) {
  const [inputId, setInputId] = useState('')
  const [inputPw, setinputPw] = useState('')

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }
  const handleInputPw = (e) => {
    setinputPw(e.target.value)
  }
  const onClickLogin = () => {
    console.log('click login')
}

  const navigate = useNavigate();

  const onhandlePost = async (data) => {
    const { userId, userPw } = data;
    const postData = { userId, userPw };
    postData.userId = data.userId;
    postData.userPw = data.userPw;
    await axios
      .post('login', postData)
      .then((res) => {
        console.log(postData);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
        });
        //navigate("/");
        setIsLogin(true);
      })
      .catch((err) => {
        if (err.response === -2) {
          Swal.fire({
            width: 460,
            height: 260,
            html: "<b> 로그인 실패</b><br><br>존재하지 않는 아이디입니다",
            showConfirmButton: false,
            cancelButtonText: "확인",
            cancelButtonColor: "#CF5E53",
            showCancelButton: true,
            background: "#fff url(/image/swalBackground.png)",
            timer: 5000,
          });
          //존재하지 않는 이메일로 로그인 실패
        } 
        else {
          console.log("err")
        }
        // else if (err.response.data === "userPassword") {
        //   Swal.fire({
        //     width: 460,
        //     height: 260,
        //     html: "<b> 로그인 실패</b><br><br>잘못된 비밀번호입니다",
        //     showConfirmButton: false,
        //     cancelButtonText: "확인",
        //     cancelButtonColor: "#CF5E53",
        //     showCancelButton: true,
        //     timer: 5000,
        //   });
        // }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click login")
    const data = new FormData(event.currentTarget);
    const loginData = {
      userId: data.get("userId"),
      userPw: data.get("userPw"),
    };
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
    fontSize: "30px"
  }

  return (
    <form style={hstyle} onSubmit={handleSubmit}>
      <Stlabel>
        Id
        <StInput type="text" id="userId" name="id" onChange={handleInputId} value={inputId} autoComplete="id" />
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

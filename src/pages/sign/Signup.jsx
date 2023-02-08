import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";

function Signup() {
  const [idError, setIdError] = useState("");
  const [passwordState, setPasswordState] = useState(""); //비밀번호 입력
  const [passwordError, setPasswordError] = useState(""); //비밀번호 재입력
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const onhandlePost = async (data) => {
    const { userId, userPassword, userEmail, userName, userPhone } = data;
    console.log(data, "data");
    const postData = { userId, userPassword, userEmail, userName, userPhone };
    postData.userId = data.id;
    postData.userPassword = data.password;
    postData.userEmail = data.email;
    postData.userName = data.name;
    postData.userPhone = data.phone;
    console.log(postData, "postData");

    await axios
      .post("http://localhost:8080/signup", postData)
      .then((res) => {
        // submit 버튼 중복클릭 방지
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
          console.log("성공");
        });
        // navigate('/');
      })
      .catch((err) => {
        console.log("error남!!!!!!!!!", err);
        console.log(err.response.data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log("data", data);
    const joinData = {
      id: data.get("id"),
      password: data.get("password"),
      email: data.get("email"),
      name: data.get("name"),
      phone: data.get("phone"),
      rePassword: data.get("rePassword"),
    };
    const { id, password, email, name, phone, rePassword } = joinData;
    console.log("id", id);
    console.log("password", password);
    console.log("email", email);
    console.log("name", name);
    console.log("phone", phone);
    console.log("rePassword", rePassword);

    // 아이디 유효성 체크
    // const idRegrex =
    //   /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    // if (!idRegrex.test(id)) setIdError("이메일 형식이 올바르지 않습니다");
    // else setIdError("");

    // // 비밀번호 유효성 체크
    // const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    // if (!passwordRegex.test(password))
    //   setPasswordState(
    //     " 영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 설정해주세요."
    //   );
    // else setPasswordState("");

    // const nameRegex = /^[가-힣a-zA-Z]+$/;
    // if (!nameRegex.test(name) || name.length < 1)
    //   setNameError('올바른 이름을 입력해주세요.');
    // else setNameError('');
    // 비밀번호 같은지 체크

    if (password !== rePassword)
      setPasswordError("비밀번호가 일치하지 않습니다.");
    else setPasswordError("");

    // 이름 유효성 체크

    // 모두 통과하면 post되는 코드 실행

    if (password === rePassword) {
      console.log("joinData", joinData);
      onhandlePost(joinData);
    }
  };

  return (
    <StSignup onSubmit={handleSubmit}>
      <Stlabel>Id</Stlabel>
      <StInput
        type="text"
        id="id"
        name="id"
        required
        autoComplete="id"
        autoFocus
      />
      <Stlabel>Password</Stlabel>
      <form>
        <StInput
          type="password"
          id="password"
          name="password"
          error={passwordState !== "" || false}
          autoComplete="new-password"
          //placeholder="영문, 숫자, 특수문자 포함 8자 이상"
        />
      </form>
      <Stlabel>RePassword</Stlabel>
      <StInput
        type="password"
        name="rePassword"
        //placeholder="비밀번호 재입력"
        error={passwordError !== "" || false}
        autoComplete="new-password"
        id="rePassword"
      />
      <Stlabel>Email</Stlabel>
      <StInput type="email" id="email" name="email" />
      <Stlabel>이름</Stlabel>
      <StInput type="text" id="name" name="name" />
      <Stlabel>전화번호</Stlabel>
      <StInput type="tel" id="phone" name="phone" />
      <br />
      <StSignupBtn id="submit" name="submit" type="submit">
        회원가입
      </StSignupBtn>
    </StSignup>
  );
}
export default Signup;

const StSignup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 7rem 0 5rem 0;
  padding: 5rem 0 5rem 0;
  flex-direction: column;
  font-size: 30px;
`;

const Stlabel = styled.div`
  width: 40rem;
  margin: 3rem 0 1rem 0;
  align-content: space-between;
  flex-direction: row;
  font-size: 2.7rem;
`;

const StInput = styled.input`
  font-size: 3rem;
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

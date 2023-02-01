import React from "react";
import styled from "styled-components";

function Signup() {
  return (
    <StSignup>
      <Stlabel>Id</Stlabel>
      <StInput type="email" />
      <Stlabel>Password</Stlabel>
      <StInput type="password" />
      <Stlabel>RePassword</Stlabel>
      <StInput type="password" />
      <Stlabel>Email</Stlabel>
      <StInput type="email" />
      <Stlabel>이름</Stlabel>
      <StInput type="text" />
      <Stlabel>전화번호</Stlabel>
      <StInput type="tel" />
      <br />
      <StSignupBtn type="submit">회원가입</StSignupBtn>
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

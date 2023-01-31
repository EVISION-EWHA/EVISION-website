import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <StLogin>
      <Stlabel>
        Id
        <StInput type="email" />
      </Stlabel>
      <Stlabel>
        Password
        <StInput type="password" />
      </Stlabel>
      <br />
      <StLoginBtn type="submit">로그인
      </StLoginBtn>
    </StLogin>
  );
}
export default Login;

const StLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20rem 0 5rem 0;
  padding: 5rem 0 5rem 0;
  flex-direction: column;
  font-size: 30px;
`;

const Stlabel = styled.label`
  width: 40rem;
  margin: 4rem 0 2rem 0;
  flex-direction: row;
  font-size: 5rem;
`;

const StInput = styled.input`
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

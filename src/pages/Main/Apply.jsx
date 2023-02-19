import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";
import logo from "assets/icon.png";
import { Link } from "react-router-dom";

const S = {
  Wrapper: styled.section`
    width: 100%;
    height: 100%;
    padding: 50px 0;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 33px;
    color: white;
    text-align: center;

    img {
      width: 50rem;
    }
  `,
  Label: styled.p`
    display: inline-block;
    font-size: 17px;
  `,
  Title: styled.h2`
    font-size: 35px;
    margin: 20px;
  `,
  Button: styled.button`
    color: black;
    width: 200px;
    height: 80px;
    background-color: white;
    font-size: 2rem;
    margin: 20px;
    border-radius: 0.8rem;

    &:hover {
      background-color: black;
      color: white;
    }
  `,
};

const Apply = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.3),
    2: useScrollFadeIn("up", 1, 0.6),
  };

  return (
    <S.Wrapper>
      <div {...animatedItem[0]}>
        <img src={logo} alt="로고사진" /> {/*소개 영상*/}
      </div>
      <S.Label {...animatedItem[1]}>
        APPLY (2/25~3/1) <br />
        하단 버튼을 누르면 폼 링크로 접속됩니다.
      </S.Label>
      <div {...animatedItem[2]}>
        <Link to="/recruit">
          <S.Button>지원하기</S.Button>
        </Link>{" "}
      </div>
    </S.Wrapper>
  );
};

export default Apply;

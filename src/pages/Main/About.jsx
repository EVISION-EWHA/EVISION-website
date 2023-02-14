import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";
import logo from "assets/icon.png";

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
    color: white;
    text-align: center;

    line-height: 35px;

    img {
      width: 60rem;
      margin: 20px;
    }
  `,
  Label: styled.p`
    display: inline-block;
    font-size: 20px;
  `,
  Title: styled.h2`
    font-size: 45px;
    margin: 20px;
  `,
};

const About = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.3),
    2: useScrollFadeIn("up", 1, 0.5),
  };

  return (
    <S.Wrapper>
      <div {...animatedItem[0]}>
        <img src={logo} alt="로고사진" />
      </div>
      <S.Title {...animatedItem[1]}>ABOUT</S.Title>
      <S.Label {...animatedItem[2]}>
        EVI$ION은
        <br />
        엘텍공과대학 소프트웨어학부 사이버보안전공
        <br />
        소속의 유일한 전공유관 과동아리 입니다.
        <br />
        5기수째 사이버보안 벗들을 중심으로
        <br />
        사이버보안 전공의 학술적인 발전을 도모하고 있습니다.
      </S.Label>
    </S.Wrapper>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";
import arrowDown from "assets/arrow_down.png";
import flag from "assets/flag.png";

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: black;
    color: white;
    text-align: center;
    line-height: 9rem;
  `,
  FirstWrapper: styled.section`
    width: 100%;
    min-height: 108rem;
    background: linear-gradient(#000000, #00331d);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;

    line-height: 9rem;

    .arrow {
      position: absolute;
      margin-top: 100vh;
      width: 2rem;
      height: 2rem;
      z-index: 3;
    }

    b {
      font-size: 12rem;
      line-height: 12rem;
      font-weight: 600;
    }
  `,
  Label: styled.div`
    @media (min-width: 1024px) {
      display: flex;
    }
    p {
      font-size: 2.4rem;
      line-height: 6rem;
    }

    .flag {
      width: 40rem;
      height: 40rem;
      @media (min-width: 1024px) {
        margin-right: 10rem;
      }
    }
  `,
  Title: styled.p`
    font-size: 7rem;
    font-weight: 600;
    margin-top: 20rem;
    margin-bottom: 20rem;

    @media (min-width: 1024px) {
      margin-top: 20rem;
      margin-bottom: 15rem;
    }
    @media (max-width: 1023px) {
      margin-top: 10rem;
      margin-bottom: 5rem;
    }
  `,
};

const About = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.3),
    2: useScrollFadeIn("up", 1, 0.3),
  };

  return (
    <S.Wrapper>
      <S.FirstWrapper>
        <b {...animatedItem[0]}>Put Your Vision to Reality</b>
        <img src={arrowDown} class="arrow" alt="" />
      </S.FirstWrapper>
      <S.Title {...animatedItem[1]}>ABOUT</S.Title>
      <S.Label {...animatedItem[2]}>
        <img src={flag} class="flag" alt="" />
        <p>
          EVI$ION은
          <br />
          엘텍공과대학 소프트웨어학부 사이버보안전공
          <br />
          소속의 유일한 과동아리 입니다.
          <br />
          5기수째 사이버보안 벗들을 중심으로
          <br />
          사이버보안 전공의 학술적인 발전을 도모하고 있습니다.
        </p>
      </S.Label>
    </S.Wrapper>
  );
};

export default About;

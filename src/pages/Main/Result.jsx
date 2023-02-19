import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";

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

    line-height: 33px;
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
    margin: 10px;
    border-radius: 0.8rem;

    &:hover {
      background-color: black;
      color: white;
    }
  `,
};

const Result = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.3),
    2: useScrollFadeIn("up", 1, 0.5),
  };

  return (
    <S.Wrapper>
      <S.Title {...animatedItem[0]}>RESULT</S.Title>
      <S.Label {...animatedItem[1]}>
        양자암호통신 아이디어 공모전 대상
        <br />
        소프트웨어 개발 보안 경진대회 최우수상
        <br />
        블록체인 아이디어 공모전 최우수상
        <br />
        한국 IT서비스 학회 추계학술대회 우수논문상
        <br />
        스마트 시티 서비스 아이디어 공모전 우수상
        <br />
        K-사이버 시큐리티 챌린지 자동차침입탐지부문 우수상
        <br />
        교내 창업 경진대회 우수상
        <br />
        KU 해커톤 우수상
        <br />
        스틸리언, BOSCH KOREA, 금융감독원 등 프로그램 수료
        <br />
        .<br />
        .<br />
        .<br />
      </S.Label>
      <div {...animatedItem[2]}>
        <Link to="/curriculum">
          <S.Button>커리큘럼 보러가기</S.Button>
        </Link>
      </div>
    </S.Wrapper>
  );
};

export default Result;

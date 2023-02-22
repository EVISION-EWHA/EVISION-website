import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";
import ctf from "assets/ctf.jpeg";
import session from "assets/session.png";
import contest from "assets/contest.png";
import bugbounty from "assets/bugbounty.png";
import career from "assets/career.png";
import hspace from "assets/space.png";

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
  Label: styled.div`
    @media (min-width: 1024px) {
      display: flex;
      gap: 20rem;
    }
    b {
      font-size: 3rem;
      font-weight: 500;
    }
    p {
      padding: 4rem;
      border-radius: 2rem;
      font-size: 2.4rem;
      line-height: 5rem;
      @media (min-width: 700px) {
        background-color: rgb(255, 255, 255, 0.1);
      }
    }

    .career {
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 4rem;
      @media (min-width: 700px) {
        width: 50%;
        padding: 6rem;
      }
      @media (max-width: 700px) {
        width: 90%;
        padding: 3rem;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h3 {
      font-size: 2rem;
      line-height: 5rem;
      font-weight: 400;
    }
  `,
  Card: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;

    gap: 5rem;
    flex-wrap: wrap;

    div {
      position: relative;
      border-radius: 10%;
      overflow: hidden;

      margin: 5rem;
      width: 50rem;
      height: 30rem;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      background-color: rgb(0, 0, 0, 0.65);
      font-size: 3rem;
      font-weight: 400;
      line-height: 6rem;
      word-break: break-all;
    }
  `,
  Title: styled.p`
    font-size: 6rem;
    font-weight: 600;

    @media (min-width: 1024px) {
      margin-top: 20rem;
      margin-bottom: 7rem;
    }
    @media (max-width: 1023px) {
      margin-top: 10rem;
      margin-bottom: 5rem;
    }
  `,
  Button: styled.div`
    background-color: white;
    color: black;
    padding: 5% 5rem;
    margin-top: 10rem;
    border-radius: 0.8rem;

    font-size: 2.4rem;
    font-weight: 400;
    line-height: 4rem;

    &:hover {
      background-color: black;
      color: white;
    }
  `,
};

const Result = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.2),
    3: useScrollFadeIn("up", 1, 0.2),
    4: useScrollFadeIn("up", 1, 0.2),
    5: useScrollFadeIn("up", 1, 0.5),
    6: useScrollFadeIn("up", 1, 0.1),
    7: useScrollFadeIn("up", 1, 0.1),
    8: useScrollFadeIn("up", 1, 0.1),
    9: useScrollFadeIn("up", 1, 0.1),
  };

  return (
    <S.Wrapper>
      <S.Title {...animatedItem[0]}>2022-2 EVI$ION</S.Title>
      <S.Card>
        <div {...animatedItem[1]}>
          <img src={session} alt="" />
          <p>
            CTF
            <br />
            (web/pwn/crypto/forensic) <br /> 기초 교육
          </p>
        </div>
        <div {...animatedItem[2]}>
          <img src={ctf} alt="" />
          <p>
            동아리내부 CTF <br /> 문제 출제 및 참가
          </p>
        </div>
        <div {...animatedItem[3]}>
          <img src={contest} alt="" />
          <p>외부 CTF 대회</p>
        </div>
        <div {...animatedItem[4]}>
          <img src={bugbounty} alt="" />
          <p>
            버그바운티 <br /> 금융(Toss, 우리은행) 대회
          </p>
        </div>
      </S.Card>
      <Link to="/curriculum">
        <S.Button>
          2023-1 <br />
          커리큘럼 보러가기
        </S.Button>
      </Link>
      <S.Title {...animatedItem[5]}>Participate / Award</S.Title>
      <S.Label>
        <div {...animatedItem[6]}>
          <b>Contest</b>
          <p>
            양자암호통신 아이디어 공모전 대상
            <br />
            소프트웨어 개발 보안 경진대회 최우수상
            <br />
            블록체인 아이디어 공모전 최우수상
            <br />
            스마트 시티 서비스 아이디어 공모전 우수상
            <br />
            K-사이버 시큐리티 챌린지 자동차침입탐지부문 우수상
            <br />
            현대오토에버 앱 개발 공모전 우수상
            <br />
            SW중심대학 공동 AI 경진대회 본선
            <br />
            교내 창업 경진대회 우수상
            <br />
            KU 해커톤 우수상
          </p>
        </div>
        <div {...animatedItem[7]}>
          <b>Research / Project</b>
          <p>
            한국 IT서비스 학회 추계학술대회 우수논문상
            <br />
            웹 취약점 스캐너 Fuzzer 제작
            <br />
            리버싱을 이용한 게임핵 제작
            <br />
            시나리오 기반의 모의해킹 프로젝트
            <br />
            BOB 차세대 보안리더 양성 프로그램
            <br />
            스틸리언, BOSCH KOREA, 금융감독원 프로그램
          </p>
        </div>
      </S.Label>
      <S.Title {...animatedItem[8]}>Career</S.Title>
      <S.Label>
        <section>
          <img src={career} className="career" alt="" />
        </section>
      </S.Label>
      <S.Title {...animatedItem[9]}>Partner</S.Title>
      <S.Label>
        <section>
          <img src={hspace} className="" alt="" />
          <h3>
            파트너쉽 혜택
            <br />
            - CTF 교육
            <br />
            - 보안 진로 컨설팅
            <br />
            - 보안 진로 컨설팅
            <br />
            - 강남역 근처 hspace 장소대여
            <br />- 전국40여개의 보안동아리와의 연합활동
          </h3>
        </section>
      </S.Label>
    </S.Wrapper>
  );
};

export default Result;

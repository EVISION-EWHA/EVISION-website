import React, { useState } from "react";
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
    width: 90%;
    @media (min-width: 1024px) {
      display: flex;
      justify-content: center;
      gap: 20rem;
    }
    b {
      font-size: 5rem;
      font-weight: 500;
      line-height: 5rem;

      @media (max-width: 1023px) {
        font-size: 4rem;
        font-weight: 500;
        line-height: 4rem;
      }
    }
    p {
      border-radius: 2rem;
      font-size: 2.4rem;
      line-height: 5rem;
      @media (min-width: 1023px) {
        background-color: rgb(255, 255, 255, 0.1);
        padding: 4rem;
      }
    }

    .career {
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 4rem;
      @media (min-width: 1023px) {
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

    .award {
      border-radius: 2rem;
      font-size: 2rem;
      line-height: 3.5rem;
      @media (min-width: 1023px) {
        background-color: rgb(255, 255, 255, 0.1);
        padding: 4rem;
        line-height: 4rem;
      }
    }
  `,
  Card: styled.div`
    @media (max-width: 1023px) {
      display: none;
    }
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
  Article: styled.article`
    @media (min-width: 1023px) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    nav {
      display: flex;
      width: 90%;
      justify-content: center;
      gap: 3rem;
      font-size: 2.3rem;
      line-height: 3.5rem;
      margin-bottom: 2rem;
    }
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgb(255, 255, 255, 0.15);
      border-radius: 1.5rem;
      width: 90%;
      padding: 2rem;
    }
    section > img {
      width: 90%;
      height: 20rem;
      margin-bottom: 1rem;
    }
    section > p {
      width: 90%;
      font-size: 2.3rem;
      line-height: 3.5rem;
    }
  `,
  Title: styled.p`
    font-size: 7rem;
    font-weight: 600;

    @media (min-width: 1024px) {
      margin-top: 20rem;
      margin-bottom: 7rem;
    }
    @media (max-width: 1023px) {
      margin-top: 10rem;
      margin-bottom: 5rem;

      font-size: 6rem;
      font-weight: 500;
      margin-top: 8rem;
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
    1: useScrollFadeIn("up", 1, 0.05),
    2: useScrollFadeIn("up", 1, 0.05),
    3: useScrollFadeIn("up", 1, 0.05),
    4: useScrollFadeIn("up", 1, 0.05),
    5: useScrollFadeIn("up", 1, 0.05),
    6: useScrollFadeIn("up", 1, 0.05),
    7: useScrollFadeIn("up", 1, 0.05),
    8: useScrollFadeIn("up", 1, 0.05),
    9: useScrollFadeIn("up", 1, 0.05),
    10: useScrollFadeIn("up", 1, 0.05),
    11: useScrollFadeIn("up", 1, 0.05),
    12: useScrollFadeIn("up", 1, 0.05),
    13: useScrollFadeIn("up", 1, 0.05),
  };
  const [opt, setOpt] = useState("1");

  return (
    <S.Wrapper>
      <S.Title {...animatedItem[0]}>2022-2 활동</S.Title>
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
      <S.Article {...animatedItem[1]}>
        <nav>
          <div
            style={
              opt === "1"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setOpt("1")}
          >
            정규세션
          </div>
          <div
            style={
              opt === "2"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setOpt("2")}
          >
            내부CTF
          </div>
          <div
            style={
              opt === "3"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setOpt("3")}
          >
            외부CTF
          </div>
          <div
            style={
              opt === "4"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setOpt("4")}
          >
            etc.
          </div>
        </nav>
        <section style={opt === "1" ? { display: "" } : { display: "none" }}>
          <img src={session} alt="" />
          <p>
            선후배 멘토링 프로그램을 통한 web/pwn/crypto/forensic 주제의 ctf
            문제풀이 및 보안 기초 다지기
          </p>
        </section>
        <section style={opt === "2" ? { display: "" } : { display: "none" }}>
          <img src={ctf} alt="" />
          <p>
            세션&심화스터디를 통해 배운것을 바탕으로
            문제출제(web/pwn/crypto/forensic), ctf 서버 구축, ctf 웹 구축 등
            동아리내에서 대회 개최, 모든 부원이 참여하는 EVI$ION 내부 CTF
          </p>
        </section>
        <section style={opt === "3" ? { display: "" } : { display: "none" }}>
          <img src={contest} alt="" />
          <p>
            화이트햇, DFC, POX 등 외부에서 열리는 CTF 대회 자율 참여를 통한 실력
            성장
          </p>
        </section>
        <section style={opt === "4" ? { display: "" } : { display: "none" }}>
          <img src={bugbounty} alt="" />
          <p>
            toss, 우리은행 등의 버그바운티 대회, 모의해킹 프로젝트, AI 보안
            대회, 개발 등 CTF 외의 보안 및 소프트웨어 대회 참가
          </p>
        </section>
      </S.Article>
      <S.Title {...animatedItem[5]}>2022-2 방학 활동</S.Title>
      <S.Label {...animatedItem[6]}>
        <div>
          <b>Penetrating Test</b>
          <p>
            시나리오 기반의 모의해킹 프로젝트
            <br /> 자세한 영상은 아래 링크에서 확인 가능합니다.
            <br />
            https://drive.google.com/drive/folders/14zm_Gj-4QMJShsRovdddpZpTP2IvO2jG?usp=sharing
          </p>
        </div>
        <div>
          <b>EVI$ION Website v2.0</b>
          <p> What you're looking at right now!</p>
        </div>
      </S.Label>
      <Link to="/curriculum">
        <S.Button>
          2023-1 <br />
          커리큘럼 보러가기
        </S.Button>
      </Link>
      <S.Title {...animatedItem[7]}>수상 및 프로그램</S.Title>
      <S.Label>
        <div {...animatedItem[8]}>
          <b>Contest</b>
          <p className="award">
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
        <div {...animatedItem[9]}>
          <b>Research / Project</b>
          <p className="award">
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
      <S.Title {...animatedItem[10]}>졸업 후 진로</S.Title>
      <S.Label {...animatedItem[11]}>
        <section>
          <img src={career} className="career" alt="" />
        </section>
      </S.Label>
      <S.Title {...animatedItem[12]}>파트너</S.Title>
      <S.Label {...animatedItem[13]}>
        <section>
          <img src={hspace} className="" alt="" />
          <h3>
            파트너쉽 혜택
            <br />
            - 전국 보안 동아리 연합 CTF 대회
            <br />
            - 보안 전문가의 무료 보안 강의
            <br />
            - 보안 공부를 위한 공간 무료 대여
            <br />
            - 그외 진로 보안 관련 컨설팅
            <br />
          </h3>
        </section>
      </S.Label>
    </S.Wrapper>
  );
};

export default Result;

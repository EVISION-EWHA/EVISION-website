import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";
import { Link } from "react-router-dom";

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
    line-height: 5rem;
    font-size: 2rem;

    div {
      width: 70%;
    }

    span {
      color: green;
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
  Button: styled.button`
    color: black;
    width: 200px;
    height: 80px;
    background-color: white;
    font-size: 2.4rem;
    margin: 20px;
    border-radius: 0.8rem;

    &:hover {
      background-color: black;
      color: white;
    }

    @media (max-width: 700px) {
      display: none;
    }
  `,
};

const Apply = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
  };

  return (
    <S.Wrapper>
      <div {...animatedItem[0]}>
        <S.Title>Apply</S.Title>
        <p>
          추가모집의 경우 선발에서 기존 부원과의 실력차이를 고려하기 위해 간단한
          테스트가 있을 예정입니다. 테스트 난도는 CTF를 공부해본 경험이 있는 분
          또는 사이버보안전공 4학기 이수 학생 수준 정도로 출제하였으니 지원 시에
          참고바랍니다.
          <br />
          <span>동아리 지원 버튼은 pc로 접속 시 확인가능합니다.</span>
        </p>
        <Link to="/recruit">
          <S.Button>
            5기 추가모집 <br />
            지원하기
          </S.Button>
        </Link>
      </div>
    </S.Wrapper>
  );
};

export default Apply;

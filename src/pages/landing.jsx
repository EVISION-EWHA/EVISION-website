import styled from "styled-components";
import logo from "assets/icon.png";
import Intro from "components/Intro";
import Curriculum from "components/curri";

function Landing() {
  return (
    <StLanding>
      <img src={logo} alt="로고사진" />
      <Intro />
      <Curriculum />
      <h2>APPLY (8/22~8/29)</h2>
      <p>하단 버튼을 누르면 폼 링크로 접속됩니다.</p>
      <StApplyBtn>
        <a href={"https://forms.gle/iLL9DeepsXAjeUZ5A"} target="_blank">
          지원하기
        </a>
      </StApplyBtn>
      <footer>
        <p>지원 및 기타 문의 : 010-5178-5316 (회장 주송아)</p>
      </footer>
    </StLanding>
  );
}

export default Landing;

const StLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: black;
  margin-bottom: 5rem;

  & > img {
    width: 25rem;
    margin: 4rem auto;
  }

  h1 {
    color: #ebeced;
    font-size: 40px;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 35px;
    margin-top: 3rem;
    margin-bottom: 2rem;
    color: #ebeced;
  }

  p {
    font-size: 17px;
    line-height: 25px;
    color: #cccccc;
  }
  & > footer {
    padding: 3rem;
  }
`;

const StApplyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 2rem;

  width: 20rem;
  margin-top: 2rem;
  margin-bottom: 5rem;

  border-radius: 0.8rem;
  cursor: pointer;
`;

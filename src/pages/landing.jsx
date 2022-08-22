import styled from "styled-components";
import logo from "assets/icon.png";
import Intro from "components/Intro";
import Curriculum from "components/curri";
import Fade from "react-reveal/Fade";
import Apply from "components/apply";
import Footer from "components/footer";

function Landing() {
  return (
    <StLanding>
      <img src={logo} alt="로고사진" />
      <Fade>
        <Intro />
      </Fade>
      <Fade>
        <Curriculum />
      </Fade>
      <Fade>
        <Apply />
      </Fade>
      <Footer />
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
    color: #ebeced;

    margin-top: 6rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 17px;
    line-height: 30px;
    color: #cccccc;
  }
`;

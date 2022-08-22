import styled from "styled-components";

function Landing() {
  return <StLanding></StLanding>;
}

export default Landing;

const StLanding = styled.div`
  width: 100%;
  & > img {
    width: 4rem;
    height: 2rem;
  }
`;

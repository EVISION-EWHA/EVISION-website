import Curriculum from "components/curri";
import { StLanding } from "pages/Main/MainPage";
import Fade from "react-reveal/Fade";

const CurriculumPage = () => {
  return (
    <StLanding>
      <Fade>
        <Curriculum />
      </Fade>
    </StLanding>
  );
};

export default CurriculumPage;

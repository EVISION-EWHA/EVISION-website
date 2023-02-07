import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "assets/icon.png";
import Intro from "components/Intro";
import Apply from "components/apply";
import Dots from "./Dots";

const DIVIDER_HEIGHT = 5;

const MainPage = () => {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이 (100vh)

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <StMain>
      <div ref={outerDivRef} className="outer">
        <Dots scrollIndex={scrollIndex} />
        <div className="inner one">
          <img src={logo} alt="로고사진" />
        </div>
        <div className="divider"></div>
        <div className="inner two">
          <Intro />
        </div>
        <div className="divider"></div>
        <div className="inner three">
          <Apply />
        </div>
      </div>
    </StMain>
  );
};

export default MainPage;

const StMain = styled.div`
  body {
    margin: 0;
    overflow-y: hidden; /*스크롤 막기*/
  }

  .outer {
    height: 100vh;
    overflow-y: auto;
  }

  /* 화면에서 스크롤바 안보이게 */
  .outer::-webkit-scrollbar {
    display: none;
  }

  .inner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    background-color: black;
  }

  p {
    font-size: 17px;
    line-height: 30px;
    color: #cccccc;
  }

  .divider {
    width: 100%;
    height: 5px;
    background-color: black;
  }
`;

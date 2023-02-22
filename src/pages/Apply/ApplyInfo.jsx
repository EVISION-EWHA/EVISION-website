import React from "react";
import "./apply.css";

function ApplyInfo() {

  const handleApply = (event)=>{
    window.location.href = "./applyform";
  }

  const handleCheck = (event)=>{
    window.location.href = "./checkpw";
  }

  return (
    <div className="ApplyInfo">
      <h2 style={{ textAlign: "center", fontSize: "7rem" }}>
        EVI$ION
        <br />
        <br />
      </h2>
      <h2
        style={{
          textAlign: "center",
          fontSize: "4rem",
          color: "#c7b0c2",
          fontWeight: 800,
        }}
      >
        ✎ 2023-1 신입부원 모집 ✎
      </h2>
      <br />

      <form>
        <label>
          이화여자대학교 엘텍공과대학 사이버보안전공 과동아리 EVI$ION이 새로운
          기수를 선발합니다!
          <br />
          아래의 사항을 꼭 확인하시고 지원부탁드립니다.
        </label>
        <br />
        <label>✔ 지원 기간 : 2/25 ~ 3/1 </label>
        <br />{" "}
        <label>
          ✔ 지원 조건 : 엘텍공과대학 소프트웨어학부 사이버보안전공 //
          주전공/복수전공 및 진입예정자 //{" "}
        </label>
        <br />{" "}
        <label>
          ✔ 테스트 일정 : 3/5 10:00~22:00 (12시간) 온라인 테스트 링크는 추후
          공개{" "}
        </label>
        <br />
        <label>✔ 지원 결과 : 3/7 이전 sms를 통해 공지됩니다.</label>
        <br />{" "}
        <label>
          ✔ 전체세션 장소 : 이화여자대학교 교내 강의실(세부건물 및 호수는 미정){" "}
        </label>
        <br />
        <label>✔ 전체세션 시간 : 목요일 오후 6시 반 ~ 오후 8시 반</label>
        <br />{" "}
        <label style={{ marginBottom: "8rem" }}>
          ✔ 동아리 OT : 3/9 오후 6시 30분~{" "}
        </label>
        <br />
        
      
      <div className="apply_btn">
      <button
          type="button"
          onClick={() => {
          handleApply();
        }}>
        지원하기
      </button>

      <button 
        type="button"
        onClick={() => {
          handleCheck();
        }}>
        지원서 확인하기
      </button>
      </div>
      </form>
    </div>
  );
}

export default ApplyInfo;

//지원 클릭 시 나타나는 지원정보 페이지
import React from "react";
import ApplyForm from "./ApplyForm";
import "./apply.css";

function ApplyInfo(){
return (
<div className= "ApplyInfo">
        <h2 style = {{ textAlign : "center",}}>EVI$ION<br/>2023-1 신입부원 모집</h2>

        <form>  
                <label>모집 기간 : 2023.03.02 ~ 2023.03.09 </label><br/>
                <label>합격 발표 : 2023.03.XX  </label><br/>

                <label>활동 기간 : 1년 (2023-1학기 ~ 2024-1학기) </label><br/>
                <label>활동 내용 : 정규세션으로 보안을 먼저 공부해본 선배/멘토분들의 튜터링을 받고 보안 기초 및 실전 스킬을 얻습니다.
                심화스터디 및 자율스터디를 통해 자신의 관심분야에 대해 더욱 심화적인 학습으로 공부합니다.
                네트워킹 행사를 통해 현직에 계신 과선배들과 소통하고, 타 학교 보안동아리와의 연합활동, EVI$ION 자체 해커톤 등을 진행하게 됩니다.</label><br/>
                <label>모집 조건 : 사이버보안 주/복수전공생 및 진입 예정자  </label><br/>
                <label>활동비 : 10,000원(동아리 비) + 30,000원(보증금) </label><br/>
                <label style ={{fontSize : "small",color:"gray",}}>*보증금은 한 학기 활동 종료 후 환급 될 예정입니다.</label>
        </form>

        <button onclick ="location.href='./applyForm'">지원하기</button>
</div>
);
}


export default ApplyInfo;


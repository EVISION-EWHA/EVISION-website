//지원 클릭 시 나타나는 지원정보 페이지
import React from "react";
//import ApplyForm from "./applyForm";

function applyInfo(){

    return (
      <div className= "ApplyInfo" style = {{
        backgroundColor : "rgb(0,100,42)",
        marginLeft : "5%",
        marginRight : "5%",
        marginTop : "10%",
        padding : "30px",
      }
      }>
          <h2 style = {{ textAlign : "center",}         
          }>EVI$ION<br/>2023-1 신입부원 모집</h2>
          <form style={{ 
          display: "flex", 
          flexDirection: "column", 
          backgroundColor : "white",
          padding : "20px",
        
          }}>
            <label>모집 기간 : 2023.03.02 ~ 2023.03.09 </label><br/>
            <label>활동 기간 : 23년도 1학기 </label><br/>
            <label>활동 내용 : CTF </label><br/>
            <label>모집 조건 : 보안에 대한 관심이 있는 소프트웨어학부 주전공, 부/복수 전공생 </label><br/>
          </form>
          
            <button type = "button" onClick="location.href = 'applyForm.jsx'" style = {{
            marginTop : "20px",
            padding : "10px",
            width : "30%",
            cursor : "pointer",
            }
            }>지원하기</button>
            </div>
      );
}

export default applyInfo;
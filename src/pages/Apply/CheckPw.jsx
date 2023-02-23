import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./apply.css";
import { API } from "../../config";
import { Navigate } from "react-router-dom";

function CheckPw() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const onHandleCheck = async (data) => {
    //확인하기 버튼 - 데이터받기
    const { id, pw } = data;
    console.log(data);
    const getData = { id, pw };
    getData.id = data.id;
    getData.pw = data.pw;

    console.log("받은id", getData.id);
    console.log("받은pw", getData.pw);

    try {
      await axios
        .get(
          `${API.Application}`,
          {
            params: {
              studentId: getData.id,
              studentPw: getData.pw,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("res",res);
          let submitBtn = document.getElementById("submit");
          submitBtn.addEventListener("click", function (e) {
            this.setAttribute("disabled", "true");
            this.setAttribute("disabledElevation", "true");
            this.setAttribute("disabledRipple", "true");
          });
          const status = res.data;
          console.log("status",status); 
          if(status===""){
            alert("비밀번호가 일치하지 않거나 지원서가 존재하지 않습니다.");
            return false;
          }
          else{
            alert("지원서를 열람합니다!")
            
          }
        });
    } catch (err) {
      console.log(err);
      // alert("비밀번호가 일치하지 않거나 지원서가 존재하지 않습니다.");
    }

    // fetch(`${API.Application}`,{
    //     method : "GET",
    //     body: JSON.stringify({
    //         userId : getData.userId,
    //         userPw : getData.userPw,
    //     }),
    // })
    // .then((response)=>response.json())
    // .then((response)=>{
    //     console.log(response.data);
    // });

    // axios
    //   .get(
    //     `${API.Application}`,
    //     {
    //   params: {
    //     studentId: getData.studentId,
    //     studentPw: getData.studentPw,
    //   },
    //       // body: {
    //       //   userId: getData.userId,
    //       //   userPw: getData.userPw,
    //       // },
    //     },
    //     { withCredentials: true }
    //   )
    //   .then(function (response) {
    //     setAllData(response.data);
    //     console.log(allData);
    //     console.log(response.data);
    //     let submitBtn = document.getElementById("submit");
    //     submitBtn.addEventListener("click", function (e) {
    //       this.setAttribute("disabled", "true");
    //       this.setAttribute("disabledElevation", "true");
    //       this.setAttribute("disabledRipple", "true");
    //     });
    //   })
    //   .catch(function (error) {
    //     console.error("error", error);
    //   });
  }; //버튼 끝

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click checkbutton");
    const Data = {
      id: inputId,
      pw: inputPw,
    };
    console.log({ Data });
    onHandleCheck(Data);
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const [allData, setAllData] = React.useState({});

  return (
    <form className="CheckPw" onSubmit={handleSubmit}>
      <label />
      학번을 입력해주세요
      <input
        type="text"
        id="userId"
        name="id"
        input={inputId}
        onChange={handleInputId}
        placeholder="학번을 입력해주세요."
      ></input>
      <br />
      <label>비밀번호를 입력하세요</label>
      <input
        label="Password"
        type="password"
        value={inputPw}
        onChange={handleInputPw}
        placeholder="지원 시 설정한 비밀번호를 입력해주세요."
      ></input>
      <br />
      <button type="submit" id="submit" onClick={handleSubmit}>
        확인하기
      </button>
    </form>
  );
}

export default CheckPw;

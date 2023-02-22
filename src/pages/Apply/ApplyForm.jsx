//실제 지원 폼
import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./apply.css";
import { API } from "../../config";

function ApplyForm() {
  const location = useLocation();
  const [state, setState] = useState({
    studentId: location.state.studentId,
    studentPw: location.state.studentPw,
    name: location.state.name,
    phone: location.state.phone,
    department: location.state.department,
    privacy: location.state.privacy,
    management: location.state.management,
    contentA: location.state.contentA,
    contentB: location.state.contentB,
  });

  const handleChange = (e) => {
    // 작성내용 객체에 저장
    // console.log(e.target.name);
    // console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    //글자수 제한
    var content = e.target.value;
    if (content.length === 500) alert("최대 600자까지 입력가능합니다.");

    if (content.length === 600) alert("최대 600자까지 입력가능합니다.");
    return;
  };

  //데이터전송..
  const onhandlePost = async (data) => {
    const {
      studentId,
      studentPw,
      name,
      phone,
      department,
      privacy,
      management,
      contentA,
      contentB,
    } = data;
    const postData = {
      studentId,
      studentPw,
      name,
      phone,
      department,
      privacy,
      management,
      contentA,
      contentB,
    };
    postData.studentId = data.studentId;
    postData.studentPw = data.studentPw;
    postData.name = data.name;
    postData.phone = data.phone;
    postData.department = data.department;
    postData.privacy = data.privacy;
    postData.management = data.management;
    postData.contentA = data.contentA;
    postData.contentB = data.contentB;

    try {
      await axios.post(`${API.Application}`, postData).then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
          console.log("클릭성공");
        });

        const status = res.data;
        console.log(status);
        if (status === 0) {
          console.log("지원완료");
          alert("지원이 완료되었습니다!");
          window.location.href = "./";
        } else if (status === -1) {
          console.log("지원 실패(학번 중복)");
          alert("이미 제출된 지원서입니다.");
        }
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  // 버튼 {제출하기}
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log("click submit");

    console.log("applyData", state);
    onhandlePost(state);
  };

  return (
    <div className="ApplyForm">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "8rem",
          fontSize: "4rem",
          color: "#c7b0c2",
          fontWeight: 800,
        }}
      >
        ✎ EVI$ION 지원서 작성 ✎
      </h2>
      <br></br>
      <form className="mainform">
        <label>
          1. 자신이 몰입해서 공부해본 분야가 있나요? 있다면 어떤 분야였고,
          결과는 어땠으며, 그 과정을 통해 무엇을 얻었는 지 이야기해주세요.
          <br /> 꼭 보안이 아니어도 좋습니다. (최대 600자)
        </label>
        <textarea
          name="contentA"
          value={state.contentA}
          onChange={handleChange}
          placeholder="내용을 입력해주세요."
          maxLength={600}
        ></textarea>{" "}
        <br />
        <label>
          2. EVI$ION에서 특히 공부해보고 싶은 활동이나 분야가 있나요? (최대
          600자){" "}
        </label>
        <textarea
          name="contentB"
          value={state.contentB}
          onChange={handleChange}
          placeholder="내용을 입력해주세요."
          maxLength={600}
        ></textarea>
        <br />
      </form>

      <button
        type="submit"
        name="submit"
        id="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        제출하기
      </button>
    </div>
  );
}

export default ApplyForm;

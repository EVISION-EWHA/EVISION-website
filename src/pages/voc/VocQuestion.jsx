import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from "@mui/material/Input";
import { API } from "../../config";
import './VocView.css';

function VocQuestion() {
    const [inputContent, setInputContent] = useState("");

    const handleInputContent = (e) => {
        setInputContent(e.target.value);
      };

    const onClickPosting= () => {
        console.log("click post");
      };

const [allData, setAllData] = React.useState({});

const onhandlePost = async (data) => {
    const { content, writerId } = data;
    const postData = { content, writerId };
    postData.content = data.content;
    postData.writerId = data.writerId;
    try {
      await axios
        .post(`${API.Board}`, postData)
        .then((res) => {
          console.log(res);
          let submitBtn = document.getElementById("submit");
          submitBtn.addEventListener("click", function (e) {
            this.setAttribute("disabled", "true");
            this.setAttribute("disabledElevation", "true");
            this.setAttribute("disabledRipple", "true");
          });
          const status = res.data;
          console.log(status);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      window.location.replace("http://localhost:3000");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click post");
    const loginData = {
      content: inputContent,
      writerId: localStorage.getItem("userId"),
    };
    console.log(loginData)
    onhandlePost(loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="title">
        <h2>게시글 작성</h2>
    </div>
    <div className="voc-view-wrapper">
        <div className="voc-view-row">
            {/* <label>제목</label>
            <input onChange={(event) => setTitle(event.target.value)}></input> */}
        </div>
        <div className="voc-view-row">
            <label>내용</label>
            <Input
          name="content"
          id="content"
          sx={{
            background: "transparent",
            color: "white",
            width: "40rem",
            fontSize: "3rem",
          }}
          value={inputContent}
          onChange={handleInputContent}
        />
        </div>
    <button type="submit" id="submit" onClick={onClickPosting}>등록</button>
    </div>
    </form>
  );
}
export default VocQuestion;

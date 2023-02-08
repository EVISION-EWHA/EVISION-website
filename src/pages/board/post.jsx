import styled from "styled-components";
import "./import.css";
import { useState } from "react";

function Post() {
  return (
    <div className="Post">
      <h1>게시판</h1>
      <div className="form-wrapper">
        <h3>
          제목
          <input className="title-input" type="text" />
        </h3>

        <h4>내용</h4>

        <textarea className="text-area" type="text"></textarea>
      </div>
      <button className="submit-button">작성하기</button>
    </div>
  );
}

export default Post;


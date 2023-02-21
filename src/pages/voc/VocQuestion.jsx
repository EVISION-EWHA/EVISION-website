import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "@mui/material/Input";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { API } from "../../config";
import "./VocView.css";

function VocQuestion() {
  const [inputContent, setInputContent] = useState("");

  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const onClickPosting = () => {
    console.log("click post");
  };

  const [allData, setAllData] = React.useState({});

  const onhandlePost = async (data) => {
    const { content, writerId } = data;
    const postData = { content, writerId };
    postData.content = data.content;
    postData.writerId = data.writerId;
    try {
      await axios.post(`${API.Board}`, postData).then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
        });
        const status = res.data;
        console.log(status);
        alert("글이 정상적으로 작성되었습니다");
        window.location.replace("/board");
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
    console.log(loginData);
    onhandlePost(loginData);
  };
  const hstyle = {
    //border: "10px solid white",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "25rem 20rem 20rem 20rem",
    height: "80rem",
    flexDirection: "column",
    fontSize: "30px",
    color: "white",
    backgroundColor: "black",
    lineHeight: 1.8,
  };

  return (
    <ThemeProvider theme={theme}>
      <form style={hstyle} onSubmit={handleSubmit}>
        <Box sx={{ fontSize: "3.4rem", pb: "3rem" ,alignItems: "center"}}>게시글 작성</Box>
        <div>
          <div>
            <label>내용</label>
            <br />
            <Box sx={{ border: "3rem", borderColor: "white" }}>
            <Input
          name="content"
          id="content"
          sx={{
            background: "white",
            color: "black",
            width: "60rem",
            height:"30rem",
            fontSize: "15pt",
          }}
                value={inputContent}
                onChange={handleInputContent}
              />
            </Box>
          </div>
          <div className="revise_button">
            <button type="submit" id="submit" onClick={onClickPosting}>
              등록
            </button>
          </div>
        </div>
      </form>
    </ThemeProvider>
  );
}
export default VocQuestion;

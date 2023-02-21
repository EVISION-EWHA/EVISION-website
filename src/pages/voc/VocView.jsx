import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./VocView.css";
import { API } from "../../config";
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

function VocView({ match }) {
  const { contentId } = useParams();

  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });

  const [allData, setAllData] = React.useState({});
  useEffect(() => {
    //게시글 내용 받아오기
    axios
      .get(`${API.Board}/` + contentId)
      .then(function (response) {
        setAllData(response.data);
        console.log(allData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onhandlePost = async (deleteData) => {
    const { userId, contentId } = deleteData;
    const postData = { userId, contentId };
    postData.userId = deleteData.userId;
    postData.contentId = deleteData.contentId;
    try {
      await axios.delete(`${API.Board}`, { data: postData }).then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
        });
        const status = res.data;
        if (status === 1) {
          alert("삭제되었습니다");
          window.location.replace("/board");
        } else if (status === 0) {
          alert("삭제할 권한이 존재하지 않습니다");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //     axios
  //     .post(`${API.Board}` , contentId)
  //     .then(function (response) {
  //     setAllData(response.data);
  //     console.log(allData);
  //     })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }, []);

  const data = allData ?? [];

  const userdata = data[contentId];

  const onClickRevise = () => {
    console.log("click revise");
  };
  const onClickDelete = () => {
    console.log("click delete");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click deletebutton");
    const deleteData = {
      userId: localStorage.getItem("userId"),
      contentId: contentId,
    };
    console.log(deleteData);
    onhandlePost(deleteData);
  };

  // const handleSubmit2 = (event) => {
  //   event.preventDefault();
  //   console.log("click drevicebutton");
  //   const reviceData = {
  //     userId: localStorage.getItem("userId"),
  //     contentId: contentId,
  //     content:""
  //   };
  //   console.log(deleteData);
  //   onhandlePost(deleteData);
  // };

  const hstyle = {
    //border: "10px solid white",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "25rem 20rem 50rem 30rem",
    height: "80rem",
    flexDirection: "column",
    fontSize: "30px",
    color: "white",
    backgroundColor: "black",
    lineHeight: 1.8,
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Box sx={{ color: "white", width: "100rem" }}>
          작성자: {data.writerId}
          <br />
          작성일자: {data.writeDate}
          <br />
          수정일자 : {data.updateDate}
          <br />
          내용 : {data.content}
          <br />
          <div className="revise_button">
            {/* <button type="submit" id="submit" onClick={onClickRevise}>
              수정
            </button> */}
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                id="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                삭제
              </button>
            </form>
          </div>
          <div className="revise_button">
            {/* <button type="submit" id="submit" onClick={onClickRevise}>
              수정
            </button> */}
            {/* <form onSubmit={handleSubmit2}>
              <button
                type="submit"
                id="submit"
                onClick={() => {
                  handleSubmit2();
                }}
              >
                수정
              </button>
            </form> */}
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default VocView;

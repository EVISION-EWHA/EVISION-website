import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './VocView.css';
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

function VocView({match}) {
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
    axios
      .get(`${API.Board}` + contentId)
      .then(function (response) {
        setAllData(response.data);
        console.log(allData);
    })
    // axios
    //   .post(`${API.Board}` , contentId)
    //   .then(function (response) {
    //     setAllData(response.data);
    //     console.log(allData);
    // })
    // axios
    //   .delete(`${API.Board}` , contentId)
    //   .then(function (response) {
    //     setAllData(response.data);
    //     alert('게시물이 삭제되었습니다.')
    // return window.location.href = '/board'

    // })
    .catch(function (error) {
      console.log(error);
    });
}, []);
const onhandlePost = async (data) => {
    const { content, writerId } = data;
    const postData = { content, writerId };
    postData.content = data.content;
    postData.writerId = data.writerId;
    try {
      await axios
        .delete(`${API.Board}`, postData)
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
    axios
    .post(`${API.Board}` , contentId)
    .then(function (response) {
    setAllData(response.data);
    console.log(allData);
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
const data = allData ?? [];

const userdata = data[contentId];

const onClickRevise= () => {
    console.log("click revise");
  };
  const onClickDelete= () => {
    console.log("click delete");
  };

const hstyle = {
  //border: "10px solid white",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  padding: "5rem 63rem 5rem 63rem",
  height: "100rem",
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
        <div className='revise_button'>
         <button type="submit" id="submit" onClick={onClickRevise}>수정</button>
         <button type="submit" id="submit" onClick={onClickDelete}>삭제</button>
        </div>
        
      </Box>
    </div>
  </ThemeProvider>
);
}

export default VocView;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  ThemeProvider,

} from "@mui/material";
import { API } from "../../config";
import { createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function CheckApplication() {
  const location = useLocation();
  const data = {
    studentId : location.state.studentId,
    name : location.state.name,
    phone : location.state.phone,
    department : location.state.department,
    management : location.state.management,
    privacy :  location.state.privacy,
    contentA: location.state.contentA,
    contentB : location.state.contentB,
    createdDate : location.state.createdDate,
  }
  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });
  
  let Management = "";
  if (data.management === true) {
    Management = "운영진 지원함";
  } else {
    Management = "운영진 지원하지 않음";
  }

  const hstyle = {
    //border: "10px solid white",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "5rem 40rem 5rem 40rem",
    //height: "100rem",
    flexDirection: "column",
    fontSize: "30px",
    color: "white",
    backgroundColor: "black",
    lineHeight: 1.8,
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Box sx={{ color: "white", width: "100%", fontSize: "2rem" }}>
          이름 : {data.name}
          <br />
          <br />
          학번: {data.studentId}
          <br />
          <br />
          학과 : {data.department}
          <br />
          <br />
          핸드폰 번호 : {data.phone}
          <br />
          <br />
          1번 답변 : {data.contentA}
          <br />
          <br />
          2번 답변 : {data.contentB}
          <br />
          <br />
          운영진 지원 여부 : {Management}
          <br />
          <br />
          생성한 날짜 : {data.createdDate}
          <br />
          {/* <br />
          수정한 날짜: {data.modifiedDate} */}
        </Box>
      </div>
    </ThemeProvider>
  );
}
export default CheckApplication;

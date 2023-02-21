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
      .get(`${API.Board}/` + contentId)
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
        
      </Box>
    </div>
  </ThemeProvider>
);
}
//   const item =  (<>
//     <h2 align="center">게시글 </h2>
//     <div className="voc-view-wrapper">
//         <div className="voc-view-row">
//             <label>게시글 번호</label>
//             <label>{ writer.id }</label>
//         </div>
//         <div className="voc-view-row">
//             <label>제목</label>
//             <label>{ writer.title }</label>
//         </div>
//         <div className="voc-view-row">
//             <label>작성일</label>
//             <label>{ writer.createDate }</label>
//         </div>
//         <div className="voc-view-row">
//             <label>내용</label>
//             <div>
//                 {
//                 writer.content
//                 }
//             </div>
//         </div>
//     </div></>)

//     return item;
// }

// function VocView() {
//   const{writerId} = useParams();
//   const item = GetData(vocId);

//   return (<>
//     <div>
//         {item}
//     </div>
//   </>);
// }
  
export default VocView;
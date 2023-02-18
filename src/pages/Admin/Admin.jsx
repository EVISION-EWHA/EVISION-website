import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
import { palette } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import UserTable from "components/userTable";

function Admin({ names, grade }) {
  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });
  const navigate = useNavigate();
  const [allData, setAllData] = React.useState({});

  useEffect(() => {
    axios
      .get("http://3.37.117.164:8080/admin/users")
      .then(function (response) {
        console.log(names);
        console.log(grade);
        setAllData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const data = allData ?? [];

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      window.location.replace("http://localhost:3000");
    }
  }, []);

  const hstyle = {
    //border: "10px solid white",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "5rem 63rem 5rem 63rem",
    flexDirection: "column",
    fontSize: "30px",
    backgroundColor: "black",
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Button
          sx={{
            backgroundColor: "#474544",
            color: "white",
            mb: 2,
            flexDirection: "row",
            alignItems: "flex-start",
            width: "10rem",
            fontWeight: "600",
            fontSize: "1.5rem",
          }}
          variant="contained"
          //color="success"
          onClick={openModal}
        >
          등급 변경
        </Button>
        <p style={{ fontSize: 30, fontFamily: "KyoboHand" }}>
          {localStorage.getItem("userId")} 님 어서오세요! 회원님의 등급은{" "}
          {localStorage.getItem("grade")}입니다
        </p>
        <Modal
          open={modalOpen}
          close={closeModal}
          header="부원 등급 변경"
          data={data}
        ></Modal>
        <UserTable data={data}></UserTable>
        <Box
          sx={{
            fontSize: "2rem",
            p: 3,
          }}
        >
          승인 대기 중 : 0 승인 완료(부원) : 1 승인 거절 : 2 추방 : 3 관리자
          계정 : 5
        </Box>
      </div>
    </ThemeProvider>
  );
}
export default Admin;

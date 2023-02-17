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
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import UserTable from "components/userTable";

function Admin() {
  const theme = createTheme({
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

  const hstyle = {
    display: "flex",
    width: "100rem",
    justifyContent: "center",
    margin: "auto",
    padding: "5rem 0 5rem 0",
    flexDirection: "column",
    fontSize: "30px",
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Button
          sx={{
            mb: 2,
            flexDirection: "row",
            alignItems: "flex-start",
            width: "10rem",
            fontSize: "1.35rem",
          }}
          variant="contained"
          color="success"
          onClick={openModal}
        >
          등급변경
        </Button>
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

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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import "./modal.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, data } = props;
  const [status, setStatus] = React.useState("");
  const [id, setId] = React.useState("");
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <FormControl
              size="large"
              variant="standard"
              sx={{ ml: 3, minWidth: 200, fontSize: "4rem" }}
            >
              <InputLabel
                sx={{ fontSize: "2.5rem" }}
                id="demo-simple-select-standard-label"
              >
                Id
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={id}
                onChange={handleIdChange}
                label="Id"
                sx={{
                  p: 1,
                  fontSize: "2.5rem",
                }}
              >
                {data.length > 0 &&
                  data.map((info) => (
                    <MenuItem
                      sx={{ fontSize: "2.5rem" }}
                      key={info.userId}
                      value={info.userId}
                    >
                      {info.userId}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl
              size="large"
              variant="standard"
              sx={{ ml: 7, minWidth: 200, fontSize: "4rem" }}
            >
              <InputLabel
                sx={{ fontSize: "2.5rem" }}
                id="demo-simple-select-standard-label"
              >
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={status}
                onChange={handleStatusChange}
                label="Status"
                sx={{
                  p: 1,
                  fontSize: "2.5rem",
                }}
              >
                <MenuItem sx={{ fontSize: "2.5rem" }} value={0}>
                  0(승인 대기 중)
                </MenuItem>
                <MenuItem sx={{ fontSize: "2.5rem" }} value={1}>
                  1(승인 완료)
                </MenuItem>
                <MenuItem sx={{ fontSize: "2.5rem" }} value={2}>
                  2(승인 거절)
                </MenuItem>
                <MenuItem sx={{ fontSize: "2.5rem" }} value={3}>
                  3(추방)
                </MenuItem>
                <MenuItem sx={{ fontSize: "2.5rem" }} value={5}>
                  5(관리자)
                </MenuItem>
              </Select>
            </FormControl>
          </main>
          <Button
            variant="contained"
            href="#contained-buttons"
            sx={{
              display: "flex",
              alignItems: "center",
              m: "auto",
              mt: 6,
              width: "15rem",
              fontSize: "2rem",
            }}
          >
            변경하기
          </Button>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;

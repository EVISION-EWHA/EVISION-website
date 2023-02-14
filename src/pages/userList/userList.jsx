import React from "react";
import "./userList.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function UserList() {
  //dummy data
  const rows: GridRowsProp = [
    {
      id: 1,
      col1: "abc333",
      col2: "곽지우",
      col3: "2022/02/11",
      col4: "대기중",
    },
    { id: 2, col1: "def2234", col2: "최빈", col3: "2022/08/21", col4: "완료" },
    { id: 3, col1: "asd343", col2: "이지현", col3: "2022/12/05", col4: "추방" },
    { id: 4, col1: "asd343", col2: "전수경", col3: "2022/08/31", col4: "거절" },
  ];
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const columns: GridColDef[] = [
    { field: "col1", headerName: "아이디", width: 250 },
    { field: "col2", headerName: "이름", width: 250 },
    { field: "col3", headerName: "가입일자", width: 250 },
    { field: "col4", headerName: "승인 상태", width: 250 },
  ];

  
  // const onhandlePost = async (data) => {
  //   const { userId, userPw } = data;
  //   const postData = { userId, userPw };
  //   postData.userId = data.userId;
  //   postData.userPw = data.userPw;

  //   await axios
  //     .post("http://3.37.117.164:8080/login", postData)
  //     .then((res) => {
  //       let submitBtn = document.getElementById("submit");
  //       submitBtn.addEventListener("click", function (e) {
  //         this.setAttribute("disabled", "true");
  //         this.setAttribute("disabledElevation", "true");
  //         this.setAttribute("disabledRipple", "true");
  //       });
  //       //navigate("/");
  //       //setIsLogin(true);
  //     })
  //     .catch((err) => {
  //       if (err.response.data === "userId") {
  //         Swal.fire({
  //           width: 460,
  //           height: 260,
  //           html: "<b> 로그인 실패</b><br><br>잘못된 이메일입니다",
  //           showConfirmButton: false,
  //           cancelButtonText: "확인",
  //           cancelButtonColor: "#CF5E53",
  //           showCancelButton: true,
  //           background: "#fff url(/image/swalBackground.png)",
  //           timer: 5000,
  //         });
  //         //존재하지 않는 이메일로 로그인 실패
  //       } else if (err.response.data === "userPassword") {
  //         Swal.fire({
  //           width: 460,
  //           height: 260,
  //           html: "<b> 로그인 실패</b><br><br>잘못된 비밀번호입니다",
  //           showConfirmButton: false,
  //           cancelButtonText: "확인",
  //           cancelButtonColor: "#CF5E53",
  //           showCancelButton: true,
  //           timer: 5000,
  //         });
  //       }
  //     });
  // };

  return (
    <div
      className="userList"
      style={{
        height: 800,
        width: 1000,
        margin: "10em 18rem 22rem 65rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        size="large"
        variant="contained"
        color="success"
        sx={{ marginBottom: 2, fontSize: "1.6rem" }}
      >
        승인 상태 변경
      </Button>
      <DataGrid
        sx={{ fontSize: "1.5rem" }}
        rows={rows}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
export default UserList;

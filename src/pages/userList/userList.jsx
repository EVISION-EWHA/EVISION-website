import React, { useState, useEffect } from "react";
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

  const columns: GridColDef[] = [
    { field: "col1", headerName: "아이디", width: 250 },
    { field: "col2", headerName: "이름", width: 250 },
    { field: "col3", headerName: "가입일자", width: 250 },
    { field: "col4", headerName: "승인 상태", width: 250 },
  ];

  const [allData, setAllData] = React.useState({});
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        const response = await axios.get(
          "http://3.37.117.164:8080/admin/users"
        );
        setAllData(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log(response.data);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    };
    fetchUsers();
  }, []);

  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <div
      className="userList"
      style={{
        height: 800,
        width: 1000,
        margin: "10em 18rem 22rem 65rem",
        //display: "flex",
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
      <Box>
        {allData &&
          allData.map((user) => (
            <div key={user.userId}>
              {user.userId} ({user.authStatus})
            </div>
          ))}
      </Box>
    </div>
  );
}
export default UserList;

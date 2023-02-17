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
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function UserTable({ data }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{
            backgroundColor: "background.default",
          }}
          aria-label="simple table"
        >
          <TableHead
            sx={{
              borderTop: "1px solid white",
              borderBottom: "1px solid white",
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.8rem",
                  fontWeight: "400",
                }}
              >
                Id
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.8rem",
                  fontWeight: "400",
                }}
              >
                이메일
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.8rem",
                  fontWeight: "400",
                }}
              >
                가입일
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.8rem",
                  fontWeight: "400",
                }}
              >
                회원 상태
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map((info) => (
                <TableRow key={info.userId}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      "&:hover,&.Mui-focusVisible": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <div>{info.userId}</div>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.email}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.signupDate}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.authStatus}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default UserTable;

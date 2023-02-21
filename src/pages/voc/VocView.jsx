import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import Modal from "./ReviceModal";
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
  // const onhandlePost1 = async (reviseData) => {
  //   const { userId, contentId } = reviseData;
  //   const postData = { userId, contentId };
  //   postData.userId = reviseData.userId;
  //   postData.contentId = reviseData.contentId;
  //   try {
  //     await axios.delete(`${API.Board}`, { data: postData }).then((res) => {
  //       console.log(res);
  //       let submitBtn = document.getElementById("submit");
  //       submitBtn.addEventListener("click", function (e) {
  //         this.setAttribute("disabled", "true");
  //         this.setAttribute("disabledElevation", "true");
  //         this.setAttribute("disabledRipple", "true");
  //       });
  //       const status = res.data;
  //       if (status === 1) {
  //         alert("삭제되었습니다");
  //         window.location.replace("/board");
  //       } else if (status === 0) {
  //         alert("수정할 권한이 존재하지 않습니다");
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
 
    const navigate = useNavigate();
    const [state] = useState({
      contentId: localStorage.getItem("contentId"),
      content: localStorage.getItem("content"),
    });
  
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].userId === localStorage.getItem("userId")) {
        state.email = allData[i].email;
      }
    }
    //버튼클릭시
    function handleModify() {
      console.log(state);
  
      navigate("/board/question/", {
        state: {
         contentId: state.contentId,
         writerId: state.writerId,
         content: state.content,
         updateDate: state.updateDate,
          updateDate: state.updateDate,
        },
        
      });
      console.log("content");
    }
  
    useEffect(() => {
      axios
        .put(`${API.Board}`)
        .then(function (response) {
          setAllData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  
    useEffect(() => {
      if (localStorage.getItem("userId") === null) {
        window.location.replace("http://localhost:3000");
      }
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

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
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
          작성일자: {data.writeDate.slice(0,10)}
          <br />
          수정일자 : {data.updateDate.slice(0,10)}
          <br />
          내용 : {data.content}
          <br />
          {/* <button type="submit" id="submit" onClick={onClickRevise}>
              수정
            </button> */}
          <form onSubmit={handleSubmit}>
            <div className="revise_button">
              <button
                type="submit"
                id="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                삭제
              </button>
            </div>
          </form>
          <div className="revise_button">
            <button
              type="submit"
              id="submit"
              variant="contained"
              onClick={openModal}
            >
              수정하기
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="수정하기"
              userId={localStorage.getItem("userId")}
              contentId={contentId}
            ></Modal>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default VocView;

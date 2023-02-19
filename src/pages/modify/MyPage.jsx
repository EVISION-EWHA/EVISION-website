import React ,{useEffect, useState}from "react";
import  "./mypage.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

//admin
//로그인된 상태의 이사람의 정보를 받아서 출력
const MyPage = () => {
    const navigate = useNavigate();
    const [allData,setAllData] = React.useState({});

    function handleModify(){
      console.log(data);
      navigate('/Modify', { state :{
        userId: data.userId,
        userPw : data.userPw,
        email : data.email,
      } 
      });
    }
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


    // useEffect(() => {
    //   if (localStorage.getItem("userId") === null) {
    //     window.location.replace("http://localhost:3000");
    //   }
    // }, []);

    return (
      <div className = "MyPage">
        <br/><h2 style = {{ textAlign : "center", fontSize : "35px", color : "white", backgroundColor : "black"}}>마이 페이지</h2>
        <form>
          <label>아이디</label>
          <label>
            {localStorage.getItem("userId")}
            <br />
          </label>

          <label> 비밀번호 </label>
          <label>
          {localStorage.getItem("userPw")}<br />
          </label>

          <label>이메일 : </label>
          <label>
            {localStorage.getItem("email")} <br />
          </label>
          <button onClick = {()=>{handleModify()}}>수정하기</button>
        </form>
      </div>
    );
  };

  export default MyPage;
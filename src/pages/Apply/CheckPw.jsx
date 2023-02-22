import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./apply.css";
import { API } from "../../config";
import { Navigate } from "react-router-dom";

function CheckPw(){
    
    const [inputId, setInputId]=useState("");
    const [inputPw,setInputPw] = useState("");


    const handleInputId = (e) => {
        setInputId(e.target.value);
    };
    
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };
    const [allData, setAllData] = React.useState({});

    const onHandleCheck=async()=> {    //확인하기 버튼 - 데이터받자
        
        const data={
            userId : inputId,
            userPw : inputPw,
        }
        const getData = {
            userId:"",
            userPw:"",
        };

        getData.userId = data.userId;
        getData.userPw = data.userPw;
        console.log("받은id",getData.userId);
        console.log("받은pw",getData.userPw);

        try {
            await axios.get(`${API.Application}`, {params: {
                'userId': getData.userId,
                'userPw' : getData.userPw
            }})
            .then((res) => {
                console.log("then은 응답함")
                setAllData(res.data);
                console.log(allData);    
               // for (let i = 0; i < allData.length; i++) {
                // if (allData[i].studentPw === inputPw) {
                //     const myId = allData[i].studentId
                //     window.location.replace("http://localhost:3000/"+{myId});       
                // }else{
                //     console.log(allData);
                //     alert("비밀번호가 일치하지 않거나 지원서가 존재하지 않습니다.")
                // }
            });
        }catch (err) {
                console.log("error", err);
        }
        }//버튼 끝
    

    // useEffect(() => {
    //     if ( === null) {
    //       window.location.replace("http://localhost:3000");
    //     }
    //   }, []);




    return(
        <div className = "CheckPw">   
        
        <label />
            학번을 입력해주세요
            <input
                input = {inputId}
                onChange={handleInputId}
                placeholder="학번을 입력해주세요."
            ></input>
        <br />
            
            <label>비밀번호를 입력하세요</label>
            <input
                type = "password"
                value ={inputPw}
                onChange={handleInputPw}
                placeholder="지원 시 설정한 비밀번호를 입력해주세요."></input><br/>
            
            <button type = "button" id = "check" onClick = {onHandleCheck}>
                확인하기
            </button>
        </div>
    );
}//전체function끝


export default CheckPw;
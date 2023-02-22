import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./apply.css";
import { API } from "../../config";
import { Navigate } from "react-router-dom";

function CheckPw(){
    
    const [inputId, setInputId]=useState("");
    const [inputPw,setInputPw] = useState("");




    const onHandleCheck=()=> {    //확인하기 버튼 - 데이터받기
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


        
        
        // fetch(`${API.Application}`,{
        //     method : "GET",
        //     body: JSON.stringify({
        //         userId : getData.userId,
        //         userPw : getData.userPw,
        //     }),
        // })
        // .then((response)=>response.json())
        // .then((response)=>{
        //     console.log(response.data);
        // });


        axios
        .get(`${API.Application}`, {
            // params: { userId : getData.userId, userPw : getData.userPw },
            body : {
                userId : getData.userId,
                userPw : getData.userPw
            }
        })
        .then(function (response) {
            setAllData(response.data);
            console.log(allData);
            console.log(response.data);
        })
        .catch(function (error) {
            console.error("error",error);
        });


        }//버튼 끝

    
    const handleInputId = (e) => {
        setInputId(e.target.value);
    };
    
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };
    const [allData, setAllData] = React.useState({});



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
}

export default CheckPw;
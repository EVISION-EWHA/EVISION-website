import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from "../../config";
import './VocView.css';

function GetCategory() {
  const [category, setCategory] = useState({});

  useEffect(() => {
    axios.post(`${API.Board}`).then((response)=> {
      setCategory(response.data);
      alert("등록됐습니다.");
    })
  }, []);

  const categories = (Object.values(category)).map((item) => (
    <option key={item.id} value={item.id}>
      {item.displayName}
    </option>
  ));

  return categories;
}

const HandleQuestionSubmit = async({body}) => {
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization' : "Bearer cognito 의 access token"
  }

  const response = await axios.post(`${API.Board}`, body, {headers: headers}).then((response) => {
    console.log('status : '+response.status);
  }).catch((error) => {
    console.log('error : '+error);
  });
}

function VocQuestion() {
  const categories = GetCategory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [stationId, setStationId] = useState('ST-4');

  const body = {
      title: title,
      content: content,
      stationId: stationId
    }

  return (<>
    <div className="title">
        <h2>게시글 작성</h2>
    </div>
    <div className="voc-view-wrapper">
        <div className="voc-view-row">
            <label>제목</label>
            <input onChange={(event) => setTitle(event.target.value)}></input>
        </div>
        <div className="voc-view-row">
            <label>내용</label>
            <textarea onChange={(event) => setContent(event.target.value)}></textarea>
        </div>
    <button className="voc-view-go-list-btn" onClick={() => HandleQuestionSubmit({body})}>등록</button>
    </div>
    </>);
}
  
export default VocQuestion;
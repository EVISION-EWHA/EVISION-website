import styled from "styled-components";
import './import.css';
import { useState } from "react";
import Axios from 'axios';

function Post() {
    const {movieContent, setMovieContent}=useState({
        title: '',
        content: ''
      })
      
    const [viewContent, setViewContent] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3000/post/api/get').then((response)=>{
          setViewContent(response.data);
        })
      },[viewContent])

      const submitReview = ()=>{
        Axios.post('http://localhost:8000/api/insert', {
          title: movieContent.title,
          content: movieContent.content
        }).then(()=>{
          alert('등록 완료!');
        })
      };
      
    const getValue=e=>{
        const { name, value } = e.target;
        setMovieContent({
          ...movieContent,
          [name]: value
        })
      };

  return (
    <div className="Post">
      <h1>게시판</h1>
      <div className='form-wrapper'>
        <h3>제목
        <input className="title-input" type='text'/>
        </h3>
        <h4>내용</h4>
          <textarea className="text-area" type='text'></textarea>
      </div>
      <button className="submit-button">작성하기</button>
    </div>
  );
}

export default Post;
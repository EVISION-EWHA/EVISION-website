
import styled from "styled-components";
import "./import.css";
import { useState } from "react";


function Post() {
  const [Content, setContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/get').then((response)=>{
      setViewContent(response.sdata);
    })
  },[viewContent])

  const submitReview = ()=>{
    axios.post('http://localhost:8000/api/insert', {
      title: Content.title,
      content: Content.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...Content,
      [name]: value
    })
  };


  return (
    <div className="Post">
      <h1>게시판</h1>
      <div className="form-wrapper">
        <h3>
          제목
          <input className="title-input" type="text" />
        </h3>

        <h4>내용</h4>

        <textarea className="text-area" type="text"></textarea>

      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>내용을 입력하세요.</p>"
          onReady={editor => {
          
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setContent({
              ...Content,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button
        className="submit-button"
        onClick={submitReview}
        >입력</button>
    </div>
  );
}

export default Post;


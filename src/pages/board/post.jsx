import styled from "styled-components";
import "./import.css";
import { useState } from "react";

function Post() {
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
      <button className="submit-button">작성하기</button>
    </div>
  );
}

export default Post;
// import styled from "styled-components";
// import "./import.css";
// import { useState } from "react";

// function Post() {
//   return (
//     <div className="Post">
//       <h1>게시글</h1>
//       <div className='container'>
//         {viewContent.map(element =>
//           <div style={{ border: '1px solid black' }}>
//             <h2>{element.title}</h2>
//             <div>
//               {ReactHtmlParser(element.content)}
//             </div>
//           </div>
//         )}
//       </div>
//       <div className='form-wrapper'>
//         <input className="title-input"
//           type='text'
//           placeholder='제목'
//           onChange={getValue}
//           name='title'
//         />
//         <CKEditor
//           editor={ClassicEditor}
//           // data="<p>내용을 적어주세요.</p>"
//           onReady={editor => {
      
//             console.log('Editor is ready to use!', editor);
//           }}
//           onChange={(event, editor) => {
//             const data = editor.getData();
//             console.log({ event, editor, data });
//             setContent({
//               ...Content,
//               content: data
//             })
//           }}
//           onBlur={(event, editor) => {
//             console.log('Blur.', editor);
//           }}
//           onFocus={(event, editor) => {
//             console.log('Focus.', editor);
//           }}
//         />
//       </div>
//       <div><button
//         className="submit-button"
//         onClick={submitReview}
//         >입력</button></div>
//       </div>
    
//   );
// }

// export default Post;


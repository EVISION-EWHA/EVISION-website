import React, { useState } from 'react'
import RegisterOrEdit from "./Sections/RegisterOrEdit";
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "components/views/slice/articleSlice";

function RegisterPage() {
    const dispatch = useDispatch();

    const [TitleValue, setTitleValue] = useState("");
    const [ContentValue, setContentValue] = useState("");
    const [IsForUpdate, setIsForUpdate]=useState(false);
    
    const { views, date, editDate } = useSelector((state) => ({
        views: state.articleReducers.views,
        date: state.articleReducers.date,
        editDate: "",
      }));

    const onTitleChange = (event) => {
      setTitleValue(event.currentTarget.value);
    };
    // console.log(TitleValue);
  
    const onContentChange = (event) => {
      setContentValue(event.currentTarget.value);
    };
    // console.log(ContentValue);
    const views = useSelector((state) => state.articleReducers.views);

    const onSubmitArticle = (event) => {
        event.preventDefault();

        const article = {
            title: TitleValue,
            content: ContentValue,
            views: views,
            date: date,
            editDate: editDate,
          };
          dispatch(articleActions.registerArticle(article));
        };
        
        if (TitleValue === "" || TitleValue === null || TitleValue === undefined) {
          alert("제목을 작성하십시오.");
          return false;
        }
    
        if (
          ContentValue === "" ||
          ContentValue === null ||
          ContentValue === undefined
        ) {
          alert("내용을 작성하십시오.");
          return false;
        }
    
        const article = { title: TitleValue, content: ContentValue, views: views };
        dispatch(articleActions.registerArticle(article));
      };
    // const onSubmitArticle = (event) => {
    //     event.preventDefault();
    //     const article = { title: TitleValue, content: ContentValue };
    //     dispatch(articleActions.registerArticle(article));
    //   };

    return (
      <>
      <RegisterOrEdit
        titleValue={TitleValue}
        constentValue={ContentValue}
        handTitleChange={onTitleChange}
        handleContentChange={onContentChange}
        handleSubmit={onSubmitArticle}
        updateRequest={IsForUpdate}
        />
    </>
    );
  }
  


export default RegisterPage;
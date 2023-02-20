import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "article",
    initialState: {
        id: 0,
        title: "",
        content: "",
        views: 0,
        date: new Date(Date.now()), 
        editDate: new Date(Date.now()), 
      },
      reducers: {
        registerArticle: (state, { payload: article }) => {
          console.log(article);
        },
      registerArticleAsync: (state, { payload }) => {
        console.log(payload);
        debugger;
        return {
          ...state,
          id: payload.id, 
        };
      },
    },
  });

export const articleReducers = articleSlice.reducer;
export const articleActions = articleSlice.actions;
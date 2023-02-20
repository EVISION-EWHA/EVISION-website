import {call, put} from "redux-saga/effects";
import Axios from "axios";
import { articleActions } from "../slice/articleSlice";
import { API } from "../../../config";

export function* registerArticleAsync(action) {
    const data=action.payload;

    const postedData = yield Axios.post(`${API.Post}`, data);

    yield alert("저장되었습니다.");
  
    console.log(postedData);
    // yield put(articleActions.registerArticleAsync(data));
    // debugger;
    // console.log(action);
    // debugger;
    // yield console.log("finish");
  }
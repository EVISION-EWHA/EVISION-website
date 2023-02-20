import Axios from "axios";
import history from "components/views/utils/history";
import { commentActions } from "../slice/commentSlice.jsx";
import { put } from "redux-saga/effects";

export function* registerCommentAsync(action) {
  const data = action.payload;

  const response = yield Axios.post(`http://3.37.117.164:8080/board`, data);

  // history.go(0);
  yield put(commentActions.getCommentsAsync(response.data)); // 리팩토링
}

export function* getCommentsAsync(action) {
  const articleId = action.payload;

  const response = yield Axios.get(
    `http://3.37.117.164:8080/comment?articleId=${articleId}`
  );

  yield put(commentActions.getCommentsAsync(response.data));
}

export function* deleteCommentAsync(action) {
  const commentId = action.payload;

  const response = yield Axios.delete(
    `http://3.37.117.164:8080/comment/${commentId}`
  );

  history.go(0);
}
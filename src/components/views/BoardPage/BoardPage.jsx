import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import BoardList from './BoardList';
import './BoardList.css';
import { Button, Typography } from "antd";

const { Title } = Typography;

function BoardPage(){
    return(
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div>
        <Title>게시판</Title>
      </div>
      <div>
        <Link to="/register">
          <Button type="primary">새 글</Button>
        </Link>
      </div>
      <div>
        <BoardList />
      </div>
    </div>
  );
}

export default BoardPage
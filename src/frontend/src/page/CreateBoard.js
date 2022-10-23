import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const CreateBoard = () => {
    let navigate = useNavigate();
    let list = [];
    return ( 
        <div>
            <h2><br/><br/></h2>
            <form onSubmit={function (event){
                    event.preventDefault();
                    list.push(event.target.title.value,event.target.user_name.value,event.target.content.value);
                    navigate("/insertBoard",{state : list});
            }}>
            <div className="mb-3">
                <label>제목</label>
                <input type="text" className="form-control" name="title" placeholder="제목을 입력해 주세요" />
            </div>
            <div className="mb-3">
                <label>작성자</label>
                <input type="text" className="form-control" name="user_name" placeholder="이름을 입력해 주세요" />
            </div>
            <div className="mb-3">
                <label>내용</label>
                <textarea className="form-control" rows="5" name="content" placeholder="내용을 입력해 주세요" ></textarea>
            </div>
            <Button type='submit' variant="success">게시글 등록</Button>
            </form>
        </div>
    );
};

export default CreateBoard;
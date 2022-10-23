import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const InsertBoard = () => {

    const[story,setStory] = useState([]);
    const {state}  = useLocation();
    // console.log(state);
    let title = state[0];
    let username = state[1];
    let contents = state[2];
    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/home`; 
        navigate(path);
      }

    useEffect(()=>{
        axios.get(`/api/createBoards?username=${username}&title=${title}&contents=${contents}`)
        .then(Response => setStory(Response.data))
        .catch((Error)=>{console.log(Error);
        });
        if(story===null){
            alert('게시 실패ㅜ');
        }
        else{
            alert('게시 성공~');
        }
    },[]);

    return (
        <div>
        <Button onClick={routeChange}>
        홈으로 돌아가기
        </Button>
        </div>
    );
};

export default InsertBoard;
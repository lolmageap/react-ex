import React, { useEffect, useState } from 'react';
import SeeOne from '../page/SeeOne';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SelectOne = () => {
    const [board, setBoard] = useState([]);
    const { state } = useLocation();
    const param = state.idx;
    console.log(param);

    useEffect(()=>{
        axios.get(`/api/res?idx=${param}`)
        .then(Response => setBoard(Response.data))
        .catch((Error)=>{console.log(Error);
        });
    },[param]);

    return (
        <div>
            <h2>{board.title}</h2>
            <h2>{board.username}</h2>
            <h2>{board.contents}</h2>
        </div>
    );
};

export default SelectOne;
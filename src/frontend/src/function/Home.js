import React, { useEffect, useState } from 'react';
import Selectid from '../page/Selectid';
import axios from 'axios';

const Home = () => {

    const [comment, setComment] = useState([]);

    useEffect(()=>{
        axios.get('/api/')
        .then(Response => setComment(Response.data));
    },[])


    return (
        <div>
            <br/>
            {comment.map((comment)=>(
                <Selectid key={comment.idx} comment={comment}/>
            ))}
        </div>
    );
};

export default Home;
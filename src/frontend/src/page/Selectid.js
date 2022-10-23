import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../bob.css';

const Selectid = (props) => {

    const {title,username,idx} = props.comment;
    let navigate = useNavigate();

    const clickHandler = (e) => {
        navigate("/res",{state : e})
      }

    return (
        <Card>
            <Card.Body>
                <Card.Title className='cursor' onClick={() => clickHandler({idx})}> {title}</Card.Title>
                <button onClick={() => clickHandler({idx})} className="btn btn-primary" variant="primary">{username}</button>
            </Card.Body>
        </Card>
    );
};

export default Selectid;
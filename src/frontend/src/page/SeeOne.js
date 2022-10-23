import React from 'react';
import { Card } from 'react-bootstrap';

const SeeOne = (props) => {
    const {userid,username,useraddr,usertel,userpwd} = props.user;

    return (
        <Card>
        <Card.Body>
            <Card.Title>{username}</Card.Title>
            <Card.Body>{usertel}</Card.Body>
        </Card.Body>
    </Card>
    );
};

export default SeeOne;
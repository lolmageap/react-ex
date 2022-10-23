import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const JoinForm = () => {

    const [param,setParam] = useState({
        userId: "",
        userPwd: "",
        confirm: "",
        userName: "",
        userEmail: "",
      });

      let navigate = useNavigate();

    const SubmitHandler = () =>{
        switch ("") {
            case param.userId:
                alert("please check id"); break;
            case param.userPwd :
                alert("please check password"); break;
            case param.confirm:
                alert("please check confirm"); break;
            case param.userName:
                alert("please check name"); break;
            case param.userEmail:
                alert("please check email"); break;
            default:
                //post
                if(param.userPwd === param.confirm){
                    axios.post('/api/join', {...param})
                    .then((Response)=>{
                        if(Response.data.state==="OK"){
                            alert(Response.data.message);
                            navigate('/');
                        }
                    })
                    .catch((er)=>{
                        console.log(er.message);
                    });
                }
                else if(param.password !== param.confirm){
                    alert('비밀번호가 틀렸으니 다시 확인해주세요');
                }
        }
    }

    const ChangeHandler = (e) =>{
        setParam({...param, [e.target.name]: e.target.value });
    }

    return(
        <div>
        <Container className="panel" style={{width:'50%', height:'100%', marginTop: '10%'}}>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextID">
                    <Col sm>
                        <Form.Control name="userId" type="text" value={param.userId} placeholder="UserID" onChange={ChangeHandler}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Col sm>
                        <Form.Control name="userPwd" type="password" value={param.userPwd} placeholder="Password" onChange={ChangeHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextConfirm">   
                    <Col sm>
                        <Form.Control name="confirm" type="password" value={param.confirm} placeholder="Confirm Password" onChange={ChangeHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
                    <Col sm>
                        <Form.Control name="userName" type="text" value={param.userName} placeholder="Username" onChange={ChangeHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Col sm>
                        <Form.Control name="userEmail" type="user" value={param.userEmail} placeholder="Email Address" onChange={ChangeHandler} />
                    </Col>
                </Form.Group>
                <br/>

                <div className="d-grid gap-1">
                    <Button variant="secondary" type="button" onClick={SubmitHandler}>
                        Sign Up
                    </Button>
                </div>
            </Form>
        </Container>
    </div>
    );
};

export default JoinForm;
import React from 'react';
import { Form , Button, Container } from 'react-bootstrap';


const Login = () => {
    const loginUser = (e) => { 
        e.preventDefault() // 리프레쉬 되지 않는다.
        console.log("login user function issue");
    }
    return (
        <div>
            <Container>
                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        로그인
                    </Button>  
                </Form>
            </Container>

        </div>
    );
};

export default Login;
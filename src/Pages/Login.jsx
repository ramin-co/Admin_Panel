import { styled } from "styled-components";
import { useEffect, useState } from "react";
import adminLogin from "../loginCall";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;
const LoginForm = styled.div`
  /* border:1px solid gray; */
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid lightgray;
  font-size: 15px;
  &::placeholder {
    font-size: 12px;
    font-weight: 400;
  }
`;
const Button = styled.button`
  padding: 10px;
  width: 30%;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Title = styled.h1``;
const Error = styled.p``;

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = () => {
    adminLogin(dispatch, { username, password });
  };

  useEffect(() => {
    user.currentUser && navigate("/dashbord");
  }, [user.currentUser, navigate]);

  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <Input
          placeholder="User name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} disabled={user.isFetching}>
          Login
        </Button>
        {user.error && <Error>Somthing is wrong...</Error>}
      </LoginForm>
    </Container>
  );
};

export default Login;

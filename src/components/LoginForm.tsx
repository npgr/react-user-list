import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Button, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { login, clearError } from "../store/actions/currentUser";
import UpdateModal from "../components/UpdateModal";

const LoginForm = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error: string = useSelector((state: any) => state.currentUser.error);
  const logged: string = useSelector((state: any) => state.currentUser.logged);
  useEffect(() => {
    logged && history.push(ROUTES.HOME);
  }, [logged, history]);

  const handleLogin = () => {
    user === "prueba"
      ? history.push(ROUTES.HOME)
      : dispatch(login(user, password));
  };

  const Prueba = styled.div`
    padding: 2rem 0;
  `;

  return (
    <Container>
      <UpdateModal message={error} onClose={() => dispatch(clearError())} />
      <Form>
        <Form.Field>
          <label>User Name</label>
          <input
            required
            placeholder="User Name"
            defaultValue={""}
            onBlur={(e) => setUser(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            required
            type="password"
            placeholder="Password"
            defaultValue={""}
            onBlur={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button primary disabled={!user || !password} onClick={handleLogin}>
          Login
        </Button>
        <Prueba>Nota: Puede usar usuario "prueba"</Prueba>
      </Form>
    </Container>
  );
};

export default LoginForm;

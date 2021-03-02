import React, { useState, useEffect } from "react";
import { Container, Button, Form, Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { login } from "../../store/auth/auth.actions";
import { selectToken, selectErrorAuth } from "../../store/auth/auth.selectors";

const LoginForm = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const errorMessage: string = useSelector(selectErrorAuth);
  const token: string = useSelector(selectToken);
  useEffect(() => {
    token && history.push(ROUTES.HOME);
  }, [token, history]);

  const handleLogin = () => {
    dispatch(login(user, password));
  };

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>User Name</label>
          <input
            required
            placeholder="User Name"
            value={user}
            onChange={(e) => setUser(e.target.value.trim())}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </Form.Field>
        <Message error visible={!!errorMessage} content={errorMessage} />
        <Button primary disabled={!user || !password} onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;

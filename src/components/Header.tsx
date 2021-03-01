import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectToken, selectUser } from "../store/auth/auth.selectors";
import { ROUTES } from "../routes/routes";

import { logout } from "../store/auth/auth.actions";
import { Title } from "./Title";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gainsboro;
`;

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(logout());
    history.push(ROUTES.LOGIN);
  };

  return (
    <Container>
      <Title>La Liga</Title>
      {token && (
        <div>
          {user}
          <Button icon onClick={handleLogout}>
            <Icon color="blue" name="sign-out" />
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserDetail } from "../../models/user";
import { getUser } from "../../store/actions/users";
import { Title } from "../../components/Title";
import UserInfo from "../../components/UserInfo";

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id: userId } = useParams();
  useEffect(() => {
    userId && dispatch(getUser(userId));
  }, [userId, dispatch]);
  const user: UserDetail = useSelector((state: any) => state.users.user);

  const goBack = () => history.goBack();

  const TitleText = styled.div`
    display: inline-block;
    margin-right: 10rem;
  `;

  return (
    <Container>
      <Title>
        <TitleText>User Detail</TitleText>
        <Button primary onClick={goBack}>
          Go Back
        </Button>
      </Title>
      {user && <UserInfo user={user} />}
    </Container>
  );
};

export default Home;

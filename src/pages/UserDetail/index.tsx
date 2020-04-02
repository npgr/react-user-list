import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserDetail } from "../../models/user";
import { getUser, clearMessages } from "../../store/actions/users";
import { Title } from "../../components/Title";
import UserInfo from "../../components/UserForm";
import UpdateModal from "../../components/UpdateModal";

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id: userId } = useParams();
  useEffect(() => {
    userId && dispatch(getUser(userId));
  }, [userId, dispatch]);
  const user: UserDetail = useSelector((state: any) => state.users.user);
  const error: string = useSelector((state: any) => state.users.error);
  const successUpdate: string = useSelector(
    (state: any) => state.users.successUpdate
  );

  const goBack = () => history.goBack();

  const TitleText = styled.div`
    display: inline-block;
    margin-right: 10rem;
  `;

  const updateMessage = error || successUpdate;

  const onCloseModal = () => {
    dispatch(clearMessages());
    goBack();
  };

  return (
    <Container>
      <UpdateModal message={updateMessage} onClose={onCloseModal} />
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

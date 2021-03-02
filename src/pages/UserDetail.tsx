import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserDetail } from "../models/user";
import { getUser, clearMessages } from "../store/users/users.actions";
import {
  selectUser,
  selectError,
  selectSuccessUpdate,
} from "../store/users/users.selectors";
import { PageContainer } from "../components/PageContainer";
import { Title } from "../components/Title";
import UserForm from "../components/UserForm";
import UpdateModal from "../components/UpdateModal";

interface IUserDetailParams {
  id: string;
}

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id: userId } = useParams<IUserDetailParams>();
  useEffect(() => {
    userId && dispatch(getUser(userId));
  }, [userId, dispatch]);
  const user: UserDetail = useSelector(selectUser);
  const error: string = useSelector(selectError);
  const successUpdate: string = useSelector(selectSuccessUpdate);

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
    <PageContainer>
      <UpdateModal message={updateMessage} onClose={onCloseModal} />
      <Card>
        <Card.Content>
          <Title>
            <TitleText>User</TitleText>
            <Button primary onClick={goBack}>
              Go Back
            </Button>
          </Title>
          {user && <UserForm user={user} />}
        </Card.Content>
      </Card>
    </PageContainer>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import { getUsers } from "../store/users/users.actions";
import { selectUserList } from "../store/users/users.selectors";
import UsersList from "../components/UserList";
import { Title } from "../components/Title";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const users = useSelector(selectUserList);

  return (
    <Container>
      <Title center>User List</Title>
      <UsersList users={users} />
    </Container>
  );
};

export default Home;
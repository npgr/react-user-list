import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import { getUsers } from "../../store/actions/users";
import UsersList from "../../components/UsersList";
import { Title } from "../../components/Title";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const users = useSelector((state: any) => state.users.users);

  return (
    <Container>
      <Title center>User List</Title>
      <UsersList users={users} />
    </Container>
  );
};

export default Home;

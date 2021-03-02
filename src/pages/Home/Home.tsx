import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "semantic-ui-react";
import { getUsers } from "../../store/users/users.actions";
import { selectUserList, selectPages } from "../../store/users/users.selectors";
import UserList from "../../components/UserList";
import { Title } from "../../components/Title";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const users = useSelector(selectUserList);
  const { page, totalPages } = useSelector(selectPages);

  const getNextPage = () => dispatch(getUsers(page + 1));

  return (
    <Container>
      <Title center>User List</Title>
      <UserList users={users} />
      {page < totalPages && (
        <Button primary onClick={getNextPage}>
          Siguiente página
        </Button>
      )}
    </Container>
  );
};

export default Home;

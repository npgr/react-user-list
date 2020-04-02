import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import { getUsers } from "../../store/actions/users";
import UsersList from "../../components/UsersList";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const users = useSelector((state: any) => state.users.users);
  console.log("users: ", users);
  return (
    <Container>
      <div>Users</div>
      <Grid>
        <UsersList users={users} />
      </Grid>
    </Container>
  );
};

export default Home;

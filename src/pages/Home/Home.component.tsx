import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/users";
import { Container } from "./Home.styles";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const users = useSelector((state: any) => state.users.users);
  console.log("users: ", users);
  return <Container>Home Page</Container>;
};

export default Home;

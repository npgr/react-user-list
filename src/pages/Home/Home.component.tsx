import React, { useEffect } from "react";
import api from "../../api/api";
import { Container } from "./Home.styles";

const Home: React.FC = () => {
  useEffect(() => {
    api.getUsers().then((data) => console.log("data: ", data));
  });
  return <Container>Home Page</Container>;
};

export default Home;

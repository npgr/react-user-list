import React from "react";
import { Title } from "./Title";
import styled from "styled-components";

const Container = styled.div`
  background-color: gainsboro;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>La Liga</Title>
    </Container>
  );
};

export default Home;

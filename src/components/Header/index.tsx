import React from "react";
import { Title } from "../Title";
import styled from "styled-components";

const Container = styled.h3`
  background-color: gainsboro;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>React Application</Title>
    </Container>
  );
};

export default Home;

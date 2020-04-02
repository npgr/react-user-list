import React from "react";
import { Container, Card } from "semantic-ui-react";
import { Title } from "../components/Title";
import LoginForm from "../components/LoginForm";

const Home: React.FC = () => {
  return (
    <Container>
      <Card>
        <Card.Content>
          <Title>Login</Title>
          <LoginForm />
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Home;

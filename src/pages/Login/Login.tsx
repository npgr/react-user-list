import React from "react";
import { Card } from "semantic-ui-react";
import { Title } from "../../components/Title";
import { PageContainer } from "../../components/PageContainer";
import LoginForm from "../../components/LoginForm";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Card.Content>
          <Title>Login</Title>
          <LoginForm />
        </Card.Content>
      </Card>
    </PageContainer>
  );
};

export default Home;

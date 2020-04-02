import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { User } from "../models/user";

const CardContainer = styled.div`
  display: inline-block;
  padding: 0.5rem;
  max-width: 20rem;
`;

const UserCard = ({ id, first_name, last_name }: User) => {
  const history = useHistory();
  return (
    <CardContainer key={id}>
      <Card onClick={() => history.push(`/user/${id}`)}>
        <Card.Content>
          <Icon name="user" />
          {`${first_name} ${last_name}`}
        </Card.Content>
      </Card>
    </CardContainer>
  );
};

export default UserCard;

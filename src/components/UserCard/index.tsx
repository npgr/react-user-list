import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { User } from "../../models/user";

export default ({ id, first_name, last_name }: User) => (
  <Card onClick={() => (window.location.href = `/detail/${id}`)}>
    <Card.Content>
      <Icon name="user" />
      {`${first_name} ${last_name}`}
    </Card.Content>
  </Card>
);

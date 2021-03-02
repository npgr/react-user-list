import React from "react";
import { Container } from "semantic-ui-react";
import { User } from "../../models/user";
import UserCard from "../UserCard";

interface IUsersListProps {
  users: User[];
}

const UserList = ({ users }: IUsersListProps) => {
  return (
    <Container textAlign="center">
      {users.map(({ id, first_name, last_name }, index) => (
        <UserCard
          key={index}
          id={id}
          first_name={first_name}
          last_name={last_name}
        />
      ))}
    </Container>
  );
};

export default UserList;

import React from "react";
import { User } from "../../models/user";
import styled from "styled-components";
import UserCard from "../UserCard";

const CardContainer = styled.div`
  display: inline-block;
  padding: 0.5rem;
  max-width: 20rem;
`;

interface IUsersListProps {
  users: User[];
}

const UsersList = ({ users }: IUsersListProps) => {
  return (
    <>
      {users.map(({ id, first_name, last_name }, index) => (
        <CardContainer>
          <UserCard
            key={index}
            id={id}
            first_name={first_name}
            last_name={last_name}
          />
        </CardContainer>
      ))}
    </>
  );
};

export default UsersList;

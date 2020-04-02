import React from "react";
import { User } from "../models/user";
import UserCard from "./UserCard";

interface IUsersListProps {
  users: User[];
}

const UsersList = ({ users }: IUsersListProps) => {
  return (
    <>
      {users.map(({ id, first_name, last_name }, index) => (
        <UserCard
          key={index}
          id={id}
          first_name={first_name}
          last_name={last_name}
        />
      ))}
    </>
  );
};

export default UsersList;

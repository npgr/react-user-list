import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { UserDetail } from "../../models/user";
import { deleteUser } from "../../store/actions/users";

const Container = styled.div`
  padding: 1.5rem;
  max-width: 20rem;
`;
interface IProps {
  user: UserDetail;
}

const UserInfo = ({ user }: IProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, first_name, last_name, email } = user;

  const handleDelete = () => {
    dispatch(deleteUser(`${id}`));
  };

  return (
    <Container key={id}>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input disabled placeholder="First Name" value={first_name} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input disabled placeholder="Last Name" value={last_name} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input disabled placeholder="Email" value={email} />
        </Form.Field>
        <Button primary onClick={handleDelete}>
          Delete
        </Button>
      </Form>
    </Container>
  );
};

export default UserInfo;

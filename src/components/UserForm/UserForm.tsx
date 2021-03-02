import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { UserDetail } from "../../models/user";
import { changeUser, deleteUser } from "../../store/users/users.actions";
import { Container } from "./UserForm.styles";
import { MODE } from "./UserForm.constants";

interface IProps {
  user: UserDetail;
}

const UserForm = ({ user }: IProps) => {
  const [mode, setmode] = useState(MODE.VIEW);
  const [userEdited, setUserEdited] = useState(user);
  const dispatch = useDispatch();
  const { id, first_name, last_name, email } = user;

  const handleDelete = () => {
    dispatch(deleteUser(`${id}`));
  };

  const handleUpdate = () => {
    const { id, first_name, last_name, email } = userEdited;
    dispatch(changeUser({ id, first_name, last_name, email }));
  };

  const modeView = mode === MODE.VIEW;

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const newUser = { ...userEdited, [e.target.id]: e.target.value };
    setUserEdited(newUser);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div>
        <strong>{`Mode: ${mode}`}</strong>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input
            id="first_name"
            disabled={modeView}
            placeholder="First Name"
            defaultValue={first_name}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            id="last_name"
            disabled={modeView}
            placeholder="Last Name"
            defaultValue={last_name}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            id={email}
            disabled={modeView}
            placeholder="Email"
            defaultValue={email}
            onChange={handleInputChange}
          />
        </Form.Field>
        {modeView ? (
          <>
            <Button primary onClick={handleDelete}>
              Delete
            </Button>
            <Button primary onClick={() => setmode(MODE.EDIT)}>
              Edit
            </Button>
          </>
        ) : (
          <>
            <Button primary onClick={handleUpdate}>
              Update
            </Button>
            <Button primary onClick={() => setmode(MODE.VIEW)}>
              Cancel
            </Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default UserForm;

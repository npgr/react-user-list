import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { UserDetail } from "../models/user";
import { changeUser, deleteUser } from "../store/actions/users";

const Container = styled.div`
  padding: 1.5rem;
  max-width: 20rem;
`;
interface IProps {
  user: UserDetail;
}

const UserInfo = ({ user }: IProps) => {
  const MODE = {
    VIEW: "VIEW",
    EDIT: "EDIT",
  };
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

  return (
    <Container key={id}>
      <div>
        <strong>{`Mode: ${mode}`}</strong>
      </div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            disabled={modeView}
            placeholder="First Name"
            defaultValue={first_name}
            onBlur={(e) =>
              setUserEdited({ ...userEdited, first_name: e.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            disabled={modeView}
            placeholder="Last Name"
            defaultValue={last_name}
            onBlur={(e) =>
              setUserEdited({ ...userEdited, last_name: e.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            disabled={modeView}
            placeholder="Email"
            defaultValue={email}
            onBlur={(e) =>
              setUserEdited({ ...userEdited, email: e.target.value })
            }
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

export default UserInfo;

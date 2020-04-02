import React from "react";
import { Button, Modal } from "semantic-ui-react";
import styled from "styled-components";

const Text = styled.div`
  padding: 3rem;
`;

interface IProps {
  message: string;
  onClose: any;
}

console.log("Modal");

const UpdateModal = ({ message, onClose }: IProps) => (
  <Modal open={!!message}>
    <Modal.Content>
      <Text>{message}</Text>
      <Button primary onClick={onClose}>
        Continue
      </Button>
    </Modal.Content>
  </Modal>
);

export default UpdateModal;

import React from "react";
import { Button, Modal } from "semantic-ui-react";
import styled from "styled-components";

const Text = styled.div`
  padding: 3rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

interface IProps {
  message: string;
  onClose: any;
}

console.log("Modal");

const UpdateModal = ({ message, onClose }: IProps) => (
  <Modal size="mini" open={!!message}>
    <Modal.Content>
      <Text>{message}</Text>
      <ButtonContainer>
        <Button primary onClick={onClose}>
          Continue
        </Button>
      </ButtonContainer>
    </Modal.Content>
  </Modal>
);

export default UpdateModal;

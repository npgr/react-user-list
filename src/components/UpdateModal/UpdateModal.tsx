import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { ButtonContainer, Text } from "./UpdateModal.styles";

interface IProps {
  message: string;
  onClose: any;
}

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

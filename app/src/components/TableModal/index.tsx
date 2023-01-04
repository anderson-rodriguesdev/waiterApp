import { Modal, TouchableOpacity, Platform } from "react-native";
import { useState } from "react";
import { Close } from "../Icons/Close";
import { Text } from "../Text";

import { ModalBody, Overlay, Header, Form, Input } from "./styles";

import { Button } from "../Button";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}
export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

  function handleSave() {
    onSave(table);
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da Mesa"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              onChangeText={(value) => setTable(value)}
            />
            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
import { useState } from "react";

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from "./styles";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { TableModal } from "../components/TableModal";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisivble] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisivble(true)}>
              Novo Pedido
            </Button>
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisivble(false)}
        onSave={handleSaveTable}
      ></TableModal>
    </>
  );
}

import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "63ace2eb08aafc80476d9a86",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza Quatro Queijos",
          imagePath: "1672267402045-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "63ace2eb08aafc80476d9a87",
      },
      {
        product: {
          name: "Coca Cola",
          imagePath: "1672268264134-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "63ace2eb08aafc80476d9a88",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕝" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="🧑‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="☑️" title="Finalizado" orders={[]} />
    </Container>
  );
}

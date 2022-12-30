import { Overlay, ModalBody, OrderDetails, Actions } from "./styles";
import { Order } from "../../types/Order";

import closeIcon from "../../assets/images/close-icon.svg";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>{order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone para Fechar" />
          </button>
        </header>
        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>{order.status === "WAITING" && "🕝"}</span>
            <span>{order.status === "IN_PRODUCTION" && "🧑‍🍳"}</span>
            <span>{order.status === "DONE" && "☑️"}</span>
            <strong>
              <span>{order.status === "WAITING" && "Fila de espera"}</span>
              <span>{order.status === "IN_PRODUCTION" && "Em preparação"}</span>
              <span>{order.status === "DONE" && "Feito"}</span>
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-itens">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56px"
                  height="28px"
                />
                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>🧑‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>
          <button type="button" className="secundary">
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}

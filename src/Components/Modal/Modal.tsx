import { ReactNode, useContext } from "react";
import {
  ModalCart,
  ModalCartItems,
  ModalContainer,
  ModalHeader,
} from "./ModalStyle";
import { CartContext } from "../../Contexts/CartContext/CartContext";

interface ModalProps {
  children: ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  const { modalCart, setModalCart } = useContext(CartContext);
  const { cartItems, setCartItems, total } = useContext(CartContext);
  if (modalCart && cartItems.length > 0) {
    return (
      <ModalContainer>
        <ModalCart>
          <ModalHeader>
            <h4 className="cartTitle">Carrinho de compras</h4>
            <button
              className="closeModal"
              onClick={() => setModalCart(!modalCart)}
            >
              X
            </button>
          </ModalHeader>
          <ModalCartItems>
            {children}
            <div className="bottomBar"></div>
            <div className="resultAndRemove">
                <div className="result">
                    <p>Total</p>
                    <p>R$: {total}</p>
                </div>
                <button className="btnEmptyCart" onClick={()=> setCartItems([])}>Remover todos</button>
            </div>
          </ModalCartItems>
        </ModalCart>
      </ModalContainer>
    );
  } else if (modalCart && cartItems.length === 0) {
    return (
      <ModalContainer>
        <ModalCart id="modalCart">
          <ModalHeader>
            <h4 className="cartTitle">Carrinho de compras</h4>
            <button
              className="closeModal"
              onClick={() => setModalCart(!modalCart)}
            >
              X
            </button>
          </ModalHeader>
          <div className="divCarrinhoVazio">
            <h3 className="sacolaVazia">Sua sacola está vazia</h3>
            <p className="adicioneItems">Adicione itens</p>
          </div>
        </ModalCart>
      </ModalContainer>
    );
  } else {
    return <></>;
  }
};

export default Modal;

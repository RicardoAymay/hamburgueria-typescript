import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import excluir from "../../Imgs/excluir.svg";
const CartList = () => {
  const { cartItems, itemOperation, excludeItemOnclick } =
    useContext(CartContext);

  return (
    <ul className="ulCartItems">
      {cartItems.map((item) => (
        <li key={item.id} id={item.id}>
          <div className="imgAndQuantity">
            <figure>
              <img src={item.img} alt="" />
            </figure>
            <div className="divCenter">
              <figcaption>{item.name}</figcaption>
              <div className="divItemQuantity">
                <button
                  className="btnAddRemove"
                  type="button"
                  value={"add"}
                  id={item.id}
                  onClick={(event) => itemOperation(event, item)}
                >
                  +
                </button>
                <p className="itemQuantity">{item.quantity}</p>
                <button
                  className="btnAddRemove"
                  type="button"
                  value={"remove"}
                  id={item.id}
                  onClick={(event) => itemOperation(event, item)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <button
            id={item.id}
            className="buttonDeleteItem"
            onClick={excludeItemOnclick}
          >
            <img src={excluir} alt="" />
          </button>
        </li>
        
      ))}
    </ul>
  );
};

export default CartList;

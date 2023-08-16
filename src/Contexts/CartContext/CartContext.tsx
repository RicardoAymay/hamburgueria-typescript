import { createContext, useState, useContext, useEffect } from "react";
import { iCartItem, iCartProvider, iCartValues } from "./cartInterfaces";
import { UserContext } from "../UserContext/UserContext";

export const CartContext = createContext({} as iCartValues);

export const CartProvider = ({ children }: iCartProvider) => {
  const [cartItems, setCartItems] = useState([] as iCartItem[]);
  const [modalCart, setModalCart] = useState(false);
  const { products } = useContext(UserContext);
  const [total, setTotal] = useState(0);
  const productsCopy: iCartItem[] = [...products];

  const includeItem = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const idClickedElement = ev.currentTarget.id;
    const existingItem = cartItems.find(
      (item: iCartItem) => Number(item.id) === Number(idClickedElement)
    );

    if (!existingItem) {
      const newItem: any = productsCopy.find(
        (item: iCartItem) => Number(item.id) === Number(idClickedElement)
      );

      newItem.quantity = 1;
      setCartItems([...cartItems, newItem]);
    } else {
      const updatedCartItems = cartItems.map((item: iCartItem) => {
        if (item.id === existingItem.id) {
          return { ...item, quantity: item.quantity! + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }
    console.log(cartItems);
  };

  const reduceItem = (itemId: string) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity! > 1 ? item.quantity! - 1 : 0 }
          : item
      );
      return updatedCartItems.filter((item) => item.quantity !== 0);
    });
  };

  const excludeItemOnclick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = Number(ev.currentTarget.id);
    
    setCartItems((prevCartItems) => prevCartItems.filter((item) => Number(item.id) !== itemId));
  };

  const addItem = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const existingItem = cartItems.find(
      (item: iCartItem) => Number(item.id) === Number(ev.currentTarget.id)
    );
    const updatedCartItems = cartItems.map((item: iCartItem) => {
      if (item.id === existingItem?.id && item.quantity) {
        item.quantity += 1;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const sumItems = (cartItems: iCartItem[]) => {
    let cartSum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      cartSum += cartItems[i].quantity!;
    }
    return cartSum;
  };

  const itemOperation = (
    ev: React.MouseEvent<HTMLButtonElement>,
    item: iCartItem
  ) => {
    ev.preventDefault();
    if (ev.currentTarget.value === "add") {
      addItem(ev);
    } else if (ev.currentTarget.value === "remove") {
      reduceItem(item.id);
    }
  };

  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => total + item.price * item.quantity!, 0);
    const formattedTotal = parseFloat(newTotal.toFixed(2));
    setTotal(formattedTotal);
  }, [cartItems]);
  

  return (
    <CartContext.Provider
      value={{
        includeItem,
        reduceItem,
        cartItems,
        setCartItems,
        itemOperation,
        sumItems,
        setModalCart,
        modalCart,
        total,
        excludeItemOnclick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

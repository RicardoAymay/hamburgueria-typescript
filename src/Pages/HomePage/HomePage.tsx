import Header from "../../Components/Header/Header";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext/UserContext";
import { Navigate } from "react-router-dom";
import ProductList from "../../Components/ProductList/productList";
import { CartProvider } from '../../Contexts/CartContext/CartContext';
import CartList from "../../Components/CartList/CartList";
import { StyledHomeMain } from "./styledHomeMain";
import { SearchProvider } from "../../Contexts/SearchContext/index";
import Modal from "../../Components/Modal/Modal";

function HomePage() {
  const { user } = useContext(UserContext);
  
  if (user) {
    return (
      <SearchProvider>
        <CartProvider>
          <Header />
          <StyledHomeMain>
            <section>
              <ul className="ulProductList">
                <ProductList />
              </ul>
            </section>
            
              <Modal>
                <CartList />
              </Modal>
            
          </StyledHomeMain>
        </CartProvider>
      </SearchProvider>
    );
  } else {
    return <Navigate to="/" />;
  }
}

export default HomePage;

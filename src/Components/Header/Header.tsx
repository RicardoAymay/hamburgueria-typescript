import logo from "../../Imgs/burguer.svg";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./styledHeader";
import lupa from "../../Imgs/lupa.svg";
import carrinho from "../../Imgs/carrinho.svg";
import sair from "../../Imgs/sair.svg";
import { useContext, useState} from 'react';
import { SearchContext } from '../../Contexts/SearchContext/index';
import { CartContext } from '../../Contexts/CartContext/CartContext';
import lupa2 from "../../Imgs/lupa2.svg"
const Header = () => {
  const navigate = useNavigate();
  const {cartItems, sumItems, modalCart, setModalCart} = useContext(CartContext)
  const {handleSearch} = useContext(SearchContext)
  const [searchActive, setSearchActive] = useState(false); // Define state variable

  const toggleSearch = () => { // Toggle function
    setSearchActive(!searchActive);
  }
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };


  return (
    <StyledHeader>
        <label htmlFor="search" className={`${searchActive ? 'openOnSearchMobile' : 'extraLabel'}`}>
            <input id="search" placeholder="Digitar Pesquisa" onChange={handleSearch} />
            <button className="buttonLupa" onClick={toggleSearch}>
              <img className="lupa" src={lupa} alt="Faça sua pesquisa." />
            </button>
        </label>
      <div className={`divHeaderElements${searchActive ? ' headerElements' : ''}`}>
        <figure>
          <img src={logo} alt="" />
        </figure>

      
        <div className={`divRightElements${searchActive ? ' activeSearch' : ''}`}>
          <label htmlFor="search">
            <input id="search" placeholder="Digitar Pesquisa" onChange={handleSearch} />
            <figure className="figLupa">
              <img className="lupa" src={lupa} alt="Faça sua pesquisa." />
            </figure>
          </label>

          <button className="mobileSearchButton">
            <img className="lupa" src={lupa2} alt="Faça sua pesquisa." onClick={toggleSearch} />
          </button>


          <button className="buttonCarrinho" onClick={()=> setModalCart(!modalCart)}>
            <p>{sumItems(cartItems)}</p>
            <img src={carrinho} alt="Acesse seu carrinho aqui." />
          </button>
          <button onClick={() => logOut()}>
            <img src={sair} alt="Clique para sair." />
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

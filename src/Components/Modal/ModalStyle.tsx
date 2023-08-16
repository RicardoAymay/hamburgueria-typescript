import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed; 
  z-index: 9;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(59, 55, 55, 0.5); 
  backdrop-filter: blur(4px); 
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-primary);
    color: white;
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;

    & button{
      background-color: inherit;
      border: none;
      color: white;
      transition: transform 200ms;
      font-size: 18px;
      font-weight: 700;
    }

    & button:hover{
      cursor: pointer;
      transform: scale(2);
      transition: transform 200ms;     
    }
`
export const ModalCart = styled.section`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 500px;
  top: 10vh;
  max-height: 75vh;

  & .divCarrinhoVazio{
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:40px;
  }

  & .adicioneItems{
    color: var(--grey-300)
  }

  @media(max-width: 767px){
    width: 90vw;
  }
`
export const ModalCartItems = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 5px;
  background-color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 700px;
  
  & .ulCartItems{
    height: fit-content;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
  }

  & li{
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 10px;
    margin-top: 20px;
  }
  & li figure{
    background-color: #E0E0E0;
    width: 90px;
    height: 90px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & li figure img{
   width: 80%;
   
  }

  & .imgAndQuantity{
    width:90%;
    display: flex;
    gap: 15px;
  }

  & li .divCenter{
    position: relative;
    height: 90px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }

  & li .divCenter figcaption{
    font-weight: 700;
    font-size: 18px;
  }
  & .divItemQuantity{
    display: flex;
    justify-content: space-around;
    gap: 8px;
    background-color: var(--grey-0);
    padding: 3.5px;
    width: 50%;
    margin-top: 33px;
    
  }

  & .divItemQuantity button{
   width: 25px;
   border: none;
   background-color: inherit;
   color: red;
  }

  & .divItemQuantity .itemQuantity{
    background-color: white;
    padding: 4px;
    padding-left: 10px;
    padding-right: 10px;
  }

  & .buttonDeleteItem{
    background-color: white;
    height: 20px;
    border: none;
    cursor: pointer;
    margin-bottom: 75px;
    margin-right: 5px;
  }

  & .bottomBar{
    width: 95%;
    height: 3px;
    background-color: var(--grey-100);
    margin-top: 20px;
  }

  & .resultAndRemove{
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 10px;
    height: 110px;
    align-items: center;

  }
 
  & .result{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  & .btnEmptyCart{
    margin-top: 15px;
    height: 60px;
    width: 100%;
    border: none;
    background-color: var(--grey-100);
    color: var(--grey-300);
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
  }
`;


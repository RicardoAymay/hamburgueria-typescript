import styled from "styled-components";

export const StyledHomeMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 769px;
  width: 100vw;
  min-height: 90vh;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;


  & > section {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > section > .ulProductList {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  & section .ulProductList li {
    min-height: 380px;
    max-height: 500px;
    width: 31%;
    border: 2px solid var(--grey-100);
    border-radius: 5px;
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    
  }
  & section .ulProductList li figure {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
    background-color: var(--grey-0);
  }
  & section .ulProductList li figure img{
    height: 100%;
  }

  & section .ulProductList li .liBottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 15px;
    gap: 10px;
    padding-left: 10px;
  }

  & section ul li:hover {
    background: var(--color-white);
    border: 2px solid var(--color-primary);
  }

  & section .ulProductList li .liBottom button {
    width: 40%;
    height: 40px;
    border: none;
    background: var(--grey-4);
    border-radius: 8px;
    color: white;
  } 
  & section .ulProductList li .liBottom button:hover {
    background: var(--color-primary);
  }

  & .tagPrice{
    color: var(--color-primary);
    font-weight: 600;
  }

  @media(max-width: 768px){
    min-height: 400px;
    max-height: 700px;
    max-width: 767px;
    overflow: hidden;
    min-width: 320px;
    padding-right: 0px;
    padding-left: 0px;
  
  & > section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
  }

  & section .ulProductList {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    min-height: 450px;
    height: 60vh;
    max-height: 700px;
    justify-content: flex-start;
    padding-left: 25px;
    margin-left: 5px;
    margin-top: 15%;
    padding-right: 25px;
  }
  section .ulProductList li {
    flex-shrink: 0;   
    min-width: 300px; 
    width: 70vw;
    height: 95%;
    border: 2px solid var(--grey-100);
    border-radius: 5px;
    margin-top: 1%;
  }
  & section .ulProductList li .liBottom {
    gap: 30px;
   
  }

`;

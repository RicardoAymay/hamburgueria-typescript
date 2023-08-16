import styled from "styled-components";

export const StyledLoginMain = styled.main`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  font-size: 16px;
  min-height: 100vh;
  max-width: 1200px;
  min-width: 769px;

  & .divFormLogin {
    width: 45%;
    display: flex;
    flex-direction: column;
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 60%;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    min-width: 300px;
    min-height: 500px;
  }
  & form {
    min-width: 300px;
    width: 95%;
    height: 65%;
    display: flex;
    flex-direction: column;
  }
  & form label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
  & form label input {
    height: 60px;
    text-indent: 8px;
    border-radius: 6px;
  }
  & form button {
    margin-top: 5%;
    height: 60px;
    border: none;
    background: #219653;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: white;
    width: 100%;
  }
  & form button:hover {
    text-decoration: underline;
  }
  & .divLoginImages {
    width: 47%;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    gap: 40px;
    height: 80%;
  }
  & a {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    border: none;
    background: var(--grey-300);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: white;
    width: 95%;
    text-decoration: none;
  }
  & a:visited {
    color: white;
  }
  & span {
    height: 1px;
    line-height: 3px;
    color: red;
    font-weight: bold;
    font-size: 12px;
  }
  & .pCriarConta {
    color: var(--grey-300);
    margin-top: 10px;
    width: 95%;
  }
  & .imgLogo {
    width: 60%;
    min-width: 150px;
  }

  & .sanduicheEbolinhas {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & .divSanduiche {
    display: flex;
    border: 1px solid #e0e0e0;
    height: 110px;
    width: 80%;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    gap: 8px;
  }
  & .divSanduiche figure {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: rgba(39, 174, 96, 0.1);
  }
  & .divSanduiche p {
    width: 75%;
  }

  & .imgBolinhasMoldura {
    margin-top: 10px;
  }

  & .imgBolinhas {
    width: 45%;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 850px;
    overflow: hidden;
    max-width: 767px;
    min-width: 320px;
     
    & .divFormLogin {
      width: 85%;
      min-height: 400px;
      margin: 20px auto;
      max-width: 95%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .divFormLogin form{
      height: fit-content;
    }
    & .divLoginImages {
        width: 85%;
        height: 200px;
        margin-left: 0;
    }
    & .sanduicheEbolinhas{
    width: 100%;
    margin: auto;
  
  }
    & .divSanduiche{
        width: 100%;
        margin: 0 auto;
        margin-right: 10px;
        gap: 10px;
    }

    & .imgBolinhasMoldura {
      display: none;
    }
    
  }
`;

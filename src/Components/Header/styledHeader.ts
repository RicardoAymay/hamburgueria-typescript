import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  height: 10vh;
  background-color: var(--grey-0);

  & > div > div > button {
    background: inherit;
    border: none;
  }
  & > div > div > .buttonCarrinho {
    margin-bottom: 15px;
    margin-right: 5px;
  }
  & > div > div > .buttonCarrinho > p {
    position: relative;
    left: 18px;
    top: 7px;
    font-weight: 600;
    background-color: var(--color-primary);
    width: 14px;
    border-radius: 3px;
    color: white;
  }
  & > .divHeaderElements {
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    padding-left: 40px;
    padding-right: 40px;
  }
  & .divRightElements {
    display: flex;
    gap: 8px;
  }
  & .divRightElements > label {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    width: 350px;
    height: 60px;
    border: 2px solid var(--grey-100);
    border-radius: 14px;
  }

  & .figLupa {
    padding: 0px 20px;
    height: 40px;
    border-radius: 4px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
  }

  & div > div > label input {
    border: none;
    background-color: white;
    height: 90%;
    width: 75%;
    text-indent: 10px;
    margin-left: 3px;
    border-radius: 8px;
  }

  & div > div > label input ::placeholder {
    color: green;
  }

  & .mobileSearchButton {
    display: none;
  }

  & .extraLabel{
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 767px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    height: 100px;
    & .divHeaderElements{
      padding-right:5px;
      padding-left: 10px;
    }
    & .divRightElements > label {
      display: none;
    }

    & .headerElements {
      display: none;
    }

    & .mobileSearchButton {
      display: flex;
    }

    & .activeSearch {
      display: flex;
      position: relative;
      width: 95%;
      height: 95%;
      display: flex;
    }

    & .openOnSearchMobile{
      display: flex;
      width: 95%;
      max-width: 760px;
      margin: 0 auto;
      background-color: white;
      height: 70px;
      border-radius: 6px;
      align-items: center;
      border: 1.5px solid black;
    }

    
    & .openOnSearchMobile #search{
      display: flex;
      width: 90%;
      margin: 0 auto;
      background-color: white;
      height: 65px;
      font-size: 18px;
      border-radius: 6px;
      text-indent: 15px;
      border: none;
    }

    & .buttonLupa {
    padding: 0px 20px;
    height: 40px;
    border-radius: 4px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
    border: none;
  }

  & .mobileSearchButton {
    display: flex;
    align-items: center;
  }
  }
`;

import styled from "styled-components";

const StyledCartListUl = styled.ul`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: 100;
background-color: rgba(145,145,145,0.4);
min-width: 450px;

li{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    width: 95%;
    min-height: 330px;
    gap: 2vh;
    background-color: var(--grey-300) ;
    border-radius: 5px;
}
`
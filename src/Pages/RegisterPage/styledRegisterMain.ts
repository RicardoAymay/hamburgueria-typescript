import styled from "styled-components";

export const RegisterMain = styled.main`
display: flex;
align-items: center;
justify-content: center;
max-width: 1200px;
min-width: 769px;
font-size: 16px
width: 95vw;
min-height:100vh;
margin: 0 auto;
height: auto;


& .divLoginImages{
    width: 47%;
    height:  250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content:center;
}
.imgLogo{
    width: 60%;
    min-width:150px;
}
.divSanduiche{
    display: flex;
  
    border: 1px solid #E0E0E0;
    height: 100px;
    width: 80%;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
.divSanduiche figure{
    width: 60px;
    height: 60px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: rgba(39, 174, 96, 0.1);
}
.divSanduiche p{
    width: 75%;
}

& .imgBolinhasMoldura{
    margin-top: 10px;
    padding-left: 10px;
}

.imgBolinhas{
    width: 45%;
}
& .divRegisterSide{
    width: 47%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    
    }

& .divRegisterHeader{
    display: flex;
    width: 95%;
    justify-content: space-between;
}
& .divRegisterHeader a:visited{
    color: #828282
}
& form{
    width: 95%;
    height: 90%;
    min-height: 650px;
    display: flex;
    flex-direction: column;
}
& form label{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top:10px;
}
& form label input{
    height: 55px;
    border-radius: 6px;
    text-indent: 8px;
}
& form span{
    color: red;
    font-weight: 600;
    height: fit-content;
}
& form button{
    margin-top: 23px;
    height: 60px;
    border: none;
    background: #219653;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: white
}

@media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
    min-width: 320px;
    width: 100%;
    max-width: 767px;
    margin-top: 30px; 
}
& .divLoginImages{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
}

& .imgBolinhasMoldura{
    display: none;
}

& .sanduicheEbolinhas{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
}

& .divRegisterSide{
    margin-top: 20px;
    width: 80%;
    min-height: 600px;
}

& form{
    width: 95%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    min-height: 20%;
}
& .divSanduiche .pSanduiche{
        margin-left: 10px;
    }
 & .divSanduiche {
    width: 100%;
 }
`;

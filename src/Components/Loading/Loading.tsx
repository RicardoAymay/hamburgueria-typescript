import carregando from "../../Imgs/carregando.webp";
import { StyledLoadingDiv } from "./styledLoadingDiv";

const Loading = () => {
  return (
    <StyledLoadingDiv>
      <img src={carregando} alt="" />
    </StyledLoadingDiv>
  );
};

export default Loading;

import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import jjSvg from "../../assets/jj.svg";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <S.Holder>
      <S.LeftSide>
        <img src={jjSvg} alt="logo"></img>
      </S.LeftSide>
      <S.RightSide>
        <h1>Page Not Found</h1>

        <S.Button onClick={handleGoHome}>Go Back</S.Button>
      </S.RightSide>
    </S.Holder>
  );
};

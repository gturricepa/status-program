import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <S.Holder>
      <h1>Page Not Found</h1>
      <button onClick={handleGoHome}>Go to Home</button>{" "}
    </S.Holder>
  );
};

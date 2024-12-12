import * as S from "./styles";
import jjSvg from "../../assets/jj.svg";
import { Form } from "../../components/form";
export const Login = () => {
  return (
    <S.Holder>
      <S.LeftSide>
        <img src={jjSvg} alt="JJ" />
      </S.LeftSide>
      <S.RightSide>
        <Form />
      </S.RightSide>
    </S.Holder>
  );
};

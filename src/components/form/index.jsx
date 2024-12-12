import * as S from "./styles";
import logo from "../../assets/cepa2.PNG";
export const Form = () => {
  return (
    <S.Form>
      <div>
        <h1>SAFE FLEET</h1>
        <h2>Status Program</h2>
      </div>
      <div>
        <S.Input type="email" placeholder="Email" />
        <S.Input type="password" placeholder="Password" />
        <S.Button>Login</S.Button>
      </div>
      <img src={logo} alt="cepa logo" />
    </S.Form>
  );
};

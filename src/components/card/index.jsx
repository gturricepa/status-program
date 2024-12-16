import * as S from "./styles";
import Flag from "react-world-flags";

// eslint-disable-next-line react/prop-types
export const Card = ({ name, code, desc }) => {
  return (
    <S.Holder>
      <h3>{name}</h3>
      <Flag code={code} height="90" />
      <S.Descripition>
        {" "}
        <p>Last Interaction:</p>
        <span>{desc}</span>
      </S.Descripition>
    </S.Holder>
  );
};

import { Card } from "../../card";
import * as S from "./styles";
export const OTHERS = () => {
  return (
    <S.Holder>
      <h1>Other Countries</h1>
      <S.CardHolder>
        <Card name="Switzerland" code="CH" desc="November" />
        <Card
          name="Spain"
          code="ES"
          desc="September / Interested in CEPA Services for 2025"
        />
        <Card name="Turkey" code="TR" desc="November" />

        <Card name="Japan" code="JP" desc="December / Next meeting Jan 2025" />
        <Card name="Phillipines" code="PH" desc="April" />
        <Card name="Malaysia" code="MY" desc="November" />
      </S.CardHolder>
    </S.Holder>
  );
};

import * as S from "./styles";
import { LogoutOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NA } from "../sections/na";
import { EMEA } from "../sections/emea";
import { APAC } from "../sections/apac";
import { ASIA } from "../sections/asia";

export const Header = () => {
  const [ative, setActive] = React.useState("NA");

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <S.Holder>
      <S.Header>
        <S.Links>
          <a onClick={() => setActive("NA")}>NA</a>
          <a onClick={() => setActive("EMEA")}>EMEA</a>
          <a onClick={() => setActive("APAC")}>APAC</a>
          <a onClick={() => setActive("ASIA")}>ASIA</a>
        </S.Links>
        <S.Welcome>
          <p>Welcome! </p>
          <LogoutOutlined onClick={handleLogout} />
        </S.Welcome>
      </S.Header>
      <S.HolderComponent>
        {ative === "NA" && <NA />}
        {ative === "EMEA" && <EMEA />}
        {ative === "APAC" && <APAC />}
        {ative === "ASIA" && <ASIA />}
      </S.HolderComponent>
    </S.Holder>
  );
};

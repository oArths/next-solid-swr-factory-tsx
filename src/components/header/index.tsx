"use client";
import * as s from "./styled";
import * as I from "react-icons/lu";
import Switch from "react-switch";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useThemes } from "../../theme/useThema";

interface IHeader {
  Link: string;
}

export const Header: React.FC<IHeader> = ({ Link }) => {
  const { toggleTheme, theme } = useThemes();
  // const {  } = useContext(ThemeContext);

  return (
    <s.Header>
      <s.Nav href={Link}>
        <s.Back size={30} />
        <s.SpanBack>voltar</s.SpanBack>
      </s.Nav>
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={50}
        handleDiameter={20}
        offColor="#334733cc"
        onColor="#080"
        id="theme-switch"
      />
    </s.Header>
  );
};
function FC<T>(arg0: { Link: any }) {
  throw new Error("Function not implemented.");
}

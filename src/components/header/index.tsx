'use client'
import * as s from "./styled";
import * as I from "react-icons/lu";
import Switch from "react-switch";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {  useThemes } from "../../theme/useThema";

export default function Header() {
  const {toggleTheme,theme} = useThemes();
  // const {  } = useContext(ThemeContext);

  return (
    <s.Header>
      <s.Nav href={"home"}>
        <s.Back size={30} />
        <s.SpanBack>voltar</s.SpanBack>
      </s.Nav>
       <Switch
        onChange={toggleTheme}
        checked={theme === 'dark'}
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
}

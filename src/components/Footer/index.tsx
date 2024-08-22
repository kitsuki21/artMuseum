import React from "react";
import styled from "styled-components";
import logo from "src/assets/museum-logo 2.svg";
import img from "src/assets/logo modsen-02 2.png";

const FooterSection = styled.footer`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0 32px 0;
`;

export const Footer = () => {
  return (
    <FooterSection>
      <img src={logo} alt="logo" />
      <img src={img} alt="mondsen" />
    </FooterSection>
  );
};

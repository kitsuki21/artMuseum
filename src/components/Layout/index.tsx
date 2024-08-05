import React from "react";
import { Wrapper } from "./styled";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }: any) => {
  return (
    <Wrapper>
      <Header path="artwork" />
      {children}
      <Footer />
    </Wrapper>
  );
};

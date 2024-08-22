import React, { ReactNode } from "react";
import styled from "styled-components";
import { Headline } from "./styled";

interface TypographyProps {
  children: string | ReactNode;
  type?: string;
}

export const Typography = ({ type, children }: TypographyProps) => {
  return (
    <div>
      <Headline type={type ? "xxl" : "xl"}>{children}</Headline>
    </div>
  );
};

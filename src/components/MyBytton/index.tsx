import React, { ReactNode } from "react";
import { Button } from "./styled";
import addBookMark from "src/assets/addedbookmark.svg";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const MyBytton = ({ onClick, children }: ButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

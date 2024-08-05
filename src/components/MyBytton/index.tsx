import React from "react";
import { Button } from "./styled";

interface ButtonProps {
  children: React.JSX.Element;
  onClick?: () => void;
}

export const MyBytton = ({ onClick, children }: ButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

import React, { ReactNode } from "react";
import { Button } from "./styled";

interface ButtonProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  position?: boolean;
}

export const MyBytton = ({ position, onClick, children }: ButtonProps) => {
  return (
    <>
      {position ? (
        <Button onClick={onClick}>{children}</Button>
      ) : (
        <Button $position="16px" onClick={onClick}>
          {children}
        </Button>
      )}
    </>
  );
};

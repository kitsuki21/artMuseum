import React from "react";
import { SortKey } from "src/pages/Home";
import styled from "styled-components";

export interface SelectOption {
  value: string;
  name: string;
  disabled?: boolean;
}
interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: SortKey) => void;
}

const SelectWindow = styled.select`
  width: 200px;
  height: 34px;
  border-radius: 5px;
  border: solid 3px;
  margin-bottom: 20px;
`;

export const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <SelectWindow
      value={value}
      onChange={(event) => onChange(event.target.value as SortKey)}
    >
      {options.map((option: any) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.name}
        </option>
      ))}
    </SelectWindow>
  );
};

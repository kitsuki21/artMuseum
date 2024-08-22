import React from "react";
import { SortKey } from "src/pages/Home";


export interface SelectOption {
  value: string, name: string, disabled?: boolean,
}
interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: SortKey) => void;
}

export const Select = ({
  options,
  value,
  onChange,
}: SelectProps) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value as SortKey)}>
      {options.map((option: any) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

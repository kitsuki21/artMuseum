import React from "react";

interface SelectProps {
  options: any;
  defaultValue: string;
  value: string;
  onChange?: any;
}

export const Select = ({
  options,
  defaultValue,
  value,
  onChange,
}: SelectProps) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

import React from 'react';

interface SelectDropdownProps {
  options: string[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}

export const SelectDropdown = ({
  options,
  defaultValue,
  onChange,
  style = {}
}: SelectDropdownProps) => (
  <select
    defaultValue={defaultValue}
    onChange={onChange}
    style={{
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginRight: '10px',
      fontSize: '14px',
      minWidth: '120px',
      ...style
    }}
  >
    {options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

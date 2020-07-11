import React from "react";
import styled from "../../../typed-components";

const Input = styled.input`
  padding: 8px;
  border: 0;
  border-radius: 10px;
  width: 300px;
  margin-left: 10px;
`;

interface IProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: string;
  name?: string;
  onChange: any;
  className?: string;
}

const SearchInput: React.FunctionComponent<IProps> = ({
  placeholder = "검색",
  type = "text",
  required = true,
  value,
  name = "",
  onChange,
  className,
}) => {
  return (
    <Input
      className={className}
      onChange={onChange}
      name={name}
      type={type}
      required={required}
      value={value}
      placeholder={placeholder}
    ></Input>
  );
};

export default SearchInput;

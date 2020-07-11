import React from "react";
import styled from "../../../typed-components";
import SearchIcon from "../../Icon/SearchIcon";

const Container = styled.div`
  width: 300px;
  padding: 8px;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: white;
`;

const Input = styled.input`
  border: 0;
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
    <Container className={className}>
      <SearchIcon color={"#c4c4c4"} />
      <Input
        onChange={onChange}
        name={name}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default SearchInput;

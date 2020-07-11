import React, { useState } from "react";
import styled from "../../../typed-components";
import SearchIcon from "../../Icon/SearchIcon";
import { media } from "../../../Styles/MediaSize";

const Container = styled.div<{ bg: string }>`
  width: 500px;
  padding: 4px;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.bg};
  ${media.phone} {
    width: 300px;
  }
`;

const Input = styled.input`
  border: 0;
  padding: 4px;
  width: 500px;
  margin-left: 10px;
  background-color: transparent;
  ${media.phone} {
    width: 300px;
  }
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
  const [color, setColor] = useState("#eeeeee");
  return (
    <Container className={className} bg={color}>
      <SearchIcon color={"#999"} />
      <Input
        onFocus={() => setColor("white")}
        onBlur={() => setColor("#eeeeee")}
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

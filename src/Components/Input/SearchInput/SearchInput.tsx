import React, { useState } from "react";
import styled from "../../../typed-components";
import SearchIcon from "../../Icon/SearchIcon";
import { media } from "../../../Styles/MediaSize";

const Container = styled.div<{ bg: string; bd: string }>`
  width: 500px;
  min-width: 400px;
  padding: 4px;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.bd};
  :hover {
    border: 0.5px solid ${(props) => props.theme.mainColor};
    background-color: white;
  }
  ${media.tablet} {
    width: 400px;
    min-width: 300px;
  }
  ${media.phone} {
    width: 300px;
  }
`;

const SearchMainIcon = styled(SearchIcon)``;

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
  const [border, setBorder] = useState("0.5px solid transparent");
  return (
    <Container className={className} bg={color} bd={border}>
      <SearchMainIcon color={"#999"} />
      <Input
        onFocus={() => {
          setColor("white");
          setBorder("0.5px solid #6AB04C");
        }}
        onBlur={() => {
          setColor("#eeeeee");
          setBorder("0.5px solid transparent");
        }}
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

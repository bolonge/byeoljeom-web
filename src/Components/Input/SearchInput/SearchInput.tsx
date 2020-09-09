import React, { useState } from "react";
import styled from "../../../typed-components";
import SearchIcon from "../../Icon/SearchIcon";
import { media } from "../../../Styles/MediaSize";

const Container = styled.div<{ bg: string; bd: string }>`
  width: 500px;
  min-width: 450px;
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
    width: 500px;
    min-width: 380px;
  }
  ${media.phone} {
    width: 380px;
    min-width: 350px;
  }
`;

const SearchMainIcon = styled(SearchIcon)`
  margin-top: 2px;
`;

const Input = styled.input`
  border: 0;
  padding: 4px;
  width: 500px;
  margin-left: 10px;
  background-color: transparent;
  ${media.tablet} {
    width: 500px;
    min-width: 350px;
  }
  ${media.phone} {
    width: 350px;
    min-width: 200px;
  }
`;

interface IProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: string;
  name?: string;
  onChange: any;
  onKeyDown?: any;
  className?: string;
}

const SearchInput: React.FunctionComponent<IProps> = ({
  placeholder = "검색",
  type = "text",
  required = true,
  value,
  name = "",
  onChange,
  onKeyDown,
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
        onKeyDown={onKeyDown}
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

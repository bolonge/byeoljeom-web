import React, { useState } from "react";
import styled from "../../../typed-components";
import { media } from "../../../Styles/MediaSize";

const Container = styled.div<{ bg: string; bd: string }>`
  width: 100%;
  padding: 4px;
  margin-left: 10px;
  border: 0.5px solid ${(props) => props.theme.lightGreyColor};
  border-radius: 5px;
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
  ${media.phone} {
    width: 200px;
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

const AuthInput: React.FunctionComponent<IProps> = ({
  placeholder,
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

export default AuthInput;

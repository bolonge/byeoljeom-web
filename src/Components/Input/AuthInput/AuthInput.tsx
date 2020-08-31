import React, { useState } from "react";
import styled from "../../../typed-components";
import { media } from "../../../Styles/MediaSize";

const Container = styled.div<{ bg: string; bd: string; disabled?: boolean }>`
  width: 80%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0.5px solid ${(props) => props.theme.lightGreyColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.bd};
  :hover {
    border: ${(props) =>
      props.disabled ? props.bd : `0.5px solid ${props.theme.mainColor} `};
    background-color: ${(props) => (props.disabled ? props.bg : "white")};
  }
  ${media.phone} {
    width: 80%;
  }
`;

const Input = styled.input`
  border: 0;
  padding: 5px;
  width: 500px;
  margin-left: 10px;
  background-color: transparent;
  ${media.phone} {
    width: 400px;
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
  disable?: boolean;
}

const AuthInput: React.FunctionComponent<IProps> = ({
  placeholder,
  type = "text",
  required = true,
  value,
  name = "",
  onChange,
  className,
  disable,
}) => {
  const [color, setColor] = useState("#eeeeee");
  const [border, setBorder] = useState("0.5px solid transparent");
  return (
    <Container className={className} bg={color} bd={border} disabled={disable}>
      <Input
        onFocus={() => {
          if (disable) {
            setColor("#eeeeee");
            setBorder("0.5px solid transparent");
          } else {
            setColor("white");
            setBorder("0.5px solid #6AB04C");
          }
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
        disabled={disable}
      />
    </Container>
  );
};

export default AuthInput;

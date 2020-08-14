import React from "react";
import styled from "../../typed-components";

const getSize = (size: string) => {
  let number;
  if (size === "sm") {
    number = 30;
  } else if (size === "md") {
    number = 50;
  } else if (size === "lg") {
    number = 150;
  }
  return `
          width:${number}px;
          height:${number}px;
          `;
};

const Container = styled.div<{ size: string; url?: string }>`
  ${(props) => getSize(props.size)}
  background-image:url(${(props) => props.url});
  background-size:cover;
  border-radius:50%;
  `;

interface IProp {
  size?: string;
  className?: string;
  url?: string;
}

const Avatar: React.FunctionComponent<IProp> = ({
  size = "sm",
  className,
  url,
}) => {
  return <Container size={size} className={className} url={url} />;
};

export default Avatar;

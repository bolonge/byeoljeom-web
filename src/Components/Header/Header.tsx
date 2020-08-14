import React, { useState, FormHTMLAttributes } from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";
import useInput from "../../Hooks/useInput";
import SearchInput from "../Input/SearchInput";
import MoreIcon from "../Icon/MoreIcon";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.whiteGrey};
  border-bottom: 0.5px solid rgba(101, 166, 74, 0.3);
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.phone} {
    height: 60px;
  }
`;

const HeaderMoreIcon = styled(MoreIcon)`
  display: none;
  transition: 0.3s ease-in-out;
  &:hover {
  }
  ${media.phone} {
    display: flex;
  }
`;

interface IProp {
  style?: any;
  url?: string;
  toggleMenu: any;
  className?: string;
}

const Header: React.FunctionComponent<IProp> = ({
  style,
  url,
  toggleMenu,
  className,
  children,
}) => {
  const search = useInput("");
  const history = useHistory();
  const [moreIShow, setMoreIShow] = useState(false);
  const onClick = () => {
    setMoreIShow((s) => !s);
    toggleMenu();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (search.value !== "") {
      if (e.key === "Enter") {
        onSearchSubmit();
      }
    } else {
      return null;
    }
  };
  const onSearchSubmit = () => {
    history.push(`/search?term=${search.value}`);
  };

  return (
    <Container style={style} className={className}>
      <HeaderMoreIcon
        onClick={onClick}
        color={moreIShow ? "#6AB04C" : "#999"}
      />
      <SearchInput
        onChange={search.onChange}
        value={search.value}
        onKeyDown={onKeyDown}
      ></SearchInput>
      {children}
    </Container>
  );
};

export default Header;

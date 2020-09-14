import React, { useState } from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";
import useInput from "../../Hooks/useInput";
import SearchInput from "../Input/SearchInput";
import MoreIcon from "../Icon/MoreIcon";
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";

const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const MainHeader = styled.div`
  width: 100%;
  height: 60px;
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
    justify-content: space-around;
  }
`;

const HeaderMoreIcon = styled(MoreIcon)`
  display: none;
  transition: 0.3s ease-in-out;
  &:hover {
  }
  ${media.phone} {
    display: flex;
    position: fixed;
    left: 10px;
    padding-right: 20px;
  }
`;

const HeaderLogo = styled(Logo)`
  display: flex;
  margin: 0 10px;
  cursor: pointer;
  path {
    fill: #474747;
    transition: fill 0.2s ease-in-out;
    &:hover {
      fill: ${(props) => props.theme.mainColor};
    }
  }

  ${media.phone} {
    display: none;
  }
`;

interface IProp {
  style?: any;
  toggleMenu: any;
  className?: string;
}

const Header: React.FunctionComponent<IProp> = ({
  style,
  toggleMenu,
  className,
  children,
}) => {
  const searchInput = useInput("");
  const history = useHistory();
  const { search } = useLocation();
  const term = new URLSearchParams(search).get("term");
  const [moreIShow, setMoreIShow] = useState(false);
  const onClick = () => {
    setMoreIShow((s) => !s);
    toggleMenu();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (searchInput.value !== "") {
      if (e.key === "Enter") {
        if (term === searchInput.value) {
          return null;
        } else {
          onSearchSubmit();
        }
      }
    } else {
      return null;
    }
  };

  const onSearchSubmit = () => {
    const encode = encodeURIComponent(searchInput.value);
    history.push(`/search?term=${encode}`);
  };

  return (
    <Container>
      <MainHeader style={style} className={className}>
        <HeaderLogo onClick={() => history.push("/")} />
        <HeaderMoreIcon
          onClick={onClick}
          color={moreIShow ? "#6AB04C" : "#999"}
        />
        <SearchInput
          onChange={searchInput.onChange}
          value={searchInput.value}
          onKeyDown={onKeyDown}
        ></SearchInput>
        {children}
      </MainHeader>
    </Container>
  );
};

export default Header;

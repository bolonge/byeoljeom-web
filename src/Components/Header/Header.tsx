import React, { useState } from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";
import useInput from "../../Hooks/useInput";
import SearchInput from "../Input/SearchInput";
import MoreIcon from "../Icon/MoreIcon";
import Avatar from "../Avatar";

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

const HeaderAvatar = styled(Avatar)`
  margin-right: 20px;
  cursor: pointer;
`;

interface IProp {
  style?: any;
  url?: string;
  className?: string;
}

const Header: React.FunctionComponent<IProp> = ({
  style,
  className,
  url,
  children,
}) => {
  const history = useHistory();
  const search = useInput("");
  const [moreIShow, setMoreIShow] = useState(false);
  const onClick = () => {
    setMoreIShow((s) => !s);
  };
  const onSearchSubmin = () => {};

  return (
    <Container style={style} className={className}>
      <HeaderMoreIcon
        onClick={onClick}
        color={moreIShow ? "#6AB04C" : "#999"}
      />
      <SearchInput
        onChange={search.onChange}
        value={search.value}
      ></SearchInput>
      {children}
      {url ? (
        <Link to={"/#"}>
          <HeaderAvatar url={url}></HeaderAvatar>
        </Link>
      ) : null}
    </Container>
  );
};

export default Header;

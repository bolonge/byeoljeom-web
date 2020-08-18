import React from "react";
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router,
  Link,
} from "react-router-dom";
import Home from "../../Routes/Home";
import Search from "../../Routes/Search";
import styled from "../../typed-components";
import Avatar from "../Avatar";
import { media } from "../../Styles/MediaSize";
import TextButton from "../Button/TextButton";
import Header from "../Header";
import AuthButton from "../Button/AuthButton";

const MainHeader = styled(Header)``;

const ButtonContainer = styled.div`
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${media.tablet} {
    width: 300px;
    min-width: 200px;
  }
  ${media.phone} {
    display: none;
  }
`;

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  min-width: 768px;
  min-height: 100vh;
  background-color: white;
  ${media.tablet} {
    min-width: 100%;
  }
  ${media.phone} {
    min-width: 100%;
  }
`;

const LoginButton = styled(TextButton)`
  margin-right: 30px;
`;

const HeaderAvatar = styled(Avatar)`
  position: absolute;
  top: 10px;
  right: 10px;
  box-shadow: 1.5px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  ${media.phone} {
    display: none;
  }
`;

const MainRoute: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/search" component={Search}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

interface IProps {
  isLoggedIn: boolean;
  url: string | undefined;
  toggleMenu: any;
  openModal: any;
  menu: boolean;
}
const AppPresenter: React.FunctionComponent<IProps> = ({
  isLoggedIn,
  url,
  toggleMenu,
  openModal,
  menu,
}) => {
  return (
    <Router>
      <MainHeader toggleMenu={toggleMenu} menu={menu}>
        {isLoggedIn ? (
          <Link to={"/"}>
            {/* 아바타 프로필 링크 */}
            <HeaderAvatar url={url}></HeaderAvatar>
          </Link>
        ) : (
          <ButtonContainer>
            <LoginButton
              text="로그인"
              size={16}
              onClick={() => openModal("logIn")}
              color={"#6AB04C"}
            ></LoginButton>
            <AuthButton
              text="회원가입"
              textColor={"#fff"}
              backColor={"#6AB04C"}
              borderColor={"#6AB04C"}
              onClick={() => openModal("signUp")}
            ></AuthButton>
          </ButtonContainer>
        )}
      </MainHeader>
      <MainPage>
        <MainRoute></MainRoute>
      </MainPage>
    </Router>
  );
};

export default AppPresenter;

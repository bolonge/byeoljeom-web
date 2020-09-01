import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
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
import MenuText from "../Button/MenuText";

const MainHeader = styled(Header)``;

const AvatarContainer = styled.div``;

const ProfileDown = styled.div<{ display: string }>`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  top: 60px;
  right: 10px;
  display: ${(props) => props.display};
  box-shadow: 1.5px 2px 5px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.whiteGrey};
  ${media.phone} {
    display: none;
  }
`;

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
//메뉴버튼
const DownMenu = styled.div<{ display: string }>`
  width: 100%;
  padding: 10px;
  display: none;
  background-color: ${(props) => props.theme.whiteGrey};
  height: auto;
  ${media.phone} {
    display: ${(props) => props.display};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const MainPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 70%;
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

const HeaderAvatar = styled(Avatar)<{ clicked: string }>`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  ${(props) =>
    props.clicked === "true"
      ? `box-shadow: 1.5px 2px 5px rgba(0, 0, 0, 0.3)`
      : `box-shadow: 1.5px 2px 5px rgba(0, 0, 0, 0)`};
  &:hover {
    box-shadow: 1.5px 2px 5px rgba(0, 0, 0, 0.3);
  }
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
  nickName: string | undefined;
  menu: boolean;
  toggleMenu: any;
  profileMenu: boolean;
  toggleProfileMenu: any;
  openModal: any;
  logOut: any;
}
const AppPresenter: React.FunctionComponent<IProps> = ({
  isLoggedIn,
  url,
  nickName,
  menu,
  toggleMenu,
  profileMenu,
  toggleProfileMenu,
  openModal,
  logOut,
}) => {
  return (
    <Router>
      <MainHeader toggleMenu={toggleMenu}>
        {isLoggedIn ? (
          <AvatarContainer onClick={toggleProfileMenu}>
            <HeaderAvatar
              clicked={profileMenu.toString()}
              url={url}
            ></HeaderAvatar>
            <ProfileDown display={profileMenu ? "absolute" : "none"}>
              <MenuText
                text="로그아웃"
                onClick={() => {
                  logOut();
                  window.location.replace("/");
                }}
                profile={true}
              ></MenuText>
            </ProfileDown>
            <Link to={"/"}>{/* 아바타 프로필 링크 */}</Link>
          </AvatarContainer>
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
      <DownMenu display={menu ? "flex" : "none"}>
        {isLoggedIn ? (
          <MenuText text={nickName}></MenuText>
        ) : (
          <>
            <MenuText
              text={"로그인"}
              onClick={() => openModal("login")}
            ></MenuText>
            <MenuText
              text={"회원가입"}
              color={"#6AB04C"}
              weight={700}
              onClick={() => openModal("signUp")}
            ></MenuText>
          </>
        )}
      </DownMenu>
      <MainPage>
        <MainRoute></MainRoute>
      </MainPage>
    </Router>
  );
};

export default AppPresenter;

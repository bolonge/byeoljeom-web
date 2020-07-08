import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

interface IProps {
  isLoggedIn: boolean;
}

//로그인화면(회원가입)

//메인화면(상품화면,리뷰화면)

//프로필화면(개인정보변경,회원탈퇴)
const AppRouter: React.SFC<IProps> = ({ isLoggedIn }) => {};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;

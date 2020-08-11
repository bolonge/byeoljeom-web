import React from "react";
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router,
} from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../../Routes/Home";
import Search from "../../Routes/Search";

interface IProps {
  isLoggedIn: boolean;
}

const MainRoute: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/search" component={Search}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};
//로그인화면(회원가입)

//메인화면(추천상품,추천리뷰,뜨고있는...)

//프로필화면(개인정보변경,회원탈퇴)

const AppPresenter: React.FunctionComponent<IProps> = ({ isLoggedIn }) => {
  return (
    <Router>
      <MainRoute></MainRoute>
    </Router>
  );
};

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;

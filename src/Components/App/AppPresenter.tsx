import React from "react";
import { HashRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => {
  return <Router></Router>;
};

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;

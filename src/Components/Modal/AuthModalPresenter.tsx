import React from "react";
import styled from "../../typed-components";
import { media } from "../../Styles/MediaSize";

const Container = styled.div`
  ${(props) => props.theme.whiteBox}
  height: 80vh;
  width: 60%;
  min-width: ${768 * 0.9}px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 10px auto;
  padding: 20px;
  box-shadow: 0px 5px 20px #999;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 2;
  ${media.tablet} {
    width: 90%;
    min-width: 90%;
  }
  ${media.phone} {
    width: 90%;
  }
`;

interface IProp {
  show?: boolean;
  closeModal?: any;
  className?: string;
}

const AuthModalPresenter: React.FunctionComponent<IProp> = ({
  show,
  closeModal,
  className,
}) => {
  return <Container className={className}></Container>;
};

export default AuthModalPresenter;

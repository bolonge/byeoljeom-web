import React from "react";
import styled from "../../typed-components";
import { Link, useHistory } from "react-router-dom";
import { media } from "../../Styles/MediaSize";

const Container = styled.footer`
  width: 100%;
  border-top: ${(props) => props.theme.boxBorder};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  ${media.phone} {
    flex-direction: column;
    padding: 30px 0px;
  }
`;

const Case = styled.div`
  width: 30%;
  height: 150px;
  margin: 0 10px;

  border: 1px solid black;
  display: flex;
  flex-direction: column;
  ${media.phone} {
    width: 90%;
    margin: 10px 10px;
  }
`;

const Text = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
  margin: 10px;
  cursor: pointer;
  &:hover,
  &:active {
    color: black;
  }
`;

const Footer: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <Container>
      <Case>
        <Text></Text>
        <Text></Text>
      </Case>
      <Case>
        <Text onClick={() => history.push("/policy/service")}>이용약관</Text>
        <Text onClick={() => history.push("/policy/privacy")}>
          개인정보처리방침
        </Text>
      </Case>
      <Case></Case>
    </Container>
  );
};

export default Footer;

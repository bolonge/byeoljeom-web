import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $nickName: String!
    $email: String!
    $password: String!
  ) {
    createAccount(nickName: $nickName, email: $email, password: $password)
  }
`;

export const REQUEST_SECRET = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($email: String!, $secret: String!) {
    confirmSecret(email: $email, secret: $secret)
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($email: String!, $password: String!) {
    changePassword(email: $email, password: $password) {
      nickName
    }
  }
`;

export const LOG_IN = gql`
  mutation login($NameOrEmail: String!, $password: String!, $type: String!) {
    login(NameOrEmail: $NameOrEmail, password: $password, type: $type)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

import gql from "graphql-tag";

export interface HomeUserProp {
  avatar: string;
  nickName: string;
}

export const ME = gql`
  query me {
    me {
      avatar
      nickName
    }
  }
`;

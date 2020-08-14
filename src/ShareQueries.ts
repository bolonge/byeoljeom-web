import gql from "graphql-tag";

interface HomeUserProp {
  avatar: string;
  nickName: string;
}

export interface HomeUserPropData {
  me: HomeUserProp;
}

export const ME = gql`
  query me {
    me {
      avatar
      nickName
    }
  }
`;

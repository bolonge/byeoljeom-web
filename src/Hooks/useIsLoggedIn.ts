import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;

export default () => {
  const { data } = useQuery(QUERY);
  return data.auth.isLoggedIn;
};

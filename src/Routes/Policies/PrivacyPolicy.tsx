import React from "react";
import styled from "../../typed-components";
import marked from "marked";
import mark from "./privacy";

const Text = styled.div`
  margin: 10px 0;
`;

const PrivacyPolicy: React.FunctionComponent = () => {
  const markedText = marked(mark);
  return <Text dangerouslySetInnerHTML={{ __html: markedText }} />;
};
export default PrivacyPolicy;

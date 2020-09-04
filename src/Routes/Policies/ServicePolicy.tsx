import React from "react";
import styled from "../../typed-components";
import marked from "marked";
import mark from "./service";

const Text = styled.div`
  margin: 10px 0;
`;

const ServicePolicy: React.FunctionComponent = () => {
  const markedText = marked(mark);
  return <Text dangerouslySetInnerHTML={{ __html: markedText }} />;
};
export default ServicePolicy;

import React from "react";

interface IProp {
  color?: string;
  className?: string;
}

const MoreIcon: React.FunctionComponent<IProp> = ({
  color = "white",
  className,
}) => {
  return (
    <svg
      color={color}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 200 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="35" rx="17.5" fill="white" />
      <rect y="74" width="200" height="35" rx="17.5" fill="white" />
      <rect y="149" width="200" height="35" rx="17.5" fill="white" />
    </svg>
  );
};

export default MoreIcon;

import * as React from "react";

export interface GreyArrowDownProps {
  width?: string;
  height?: string;
  className?: string;
}

const GreyArrowDown = (props: GreyArrowDownProps) => {
  const { width = "10", height = "5" } = props;
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0L5 5L10 0H0Z" fill="#D2D2D2"/>
    </svg>
  );
};


export default GreyArrowDown;
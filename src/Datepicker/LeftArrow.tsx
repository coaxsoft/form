import * as React from "react";

type LeftArrowProps = {
  className?: string;
  fill?: string;
  onClick?: () => void;
}

const LeftArrow = ({ className, fill = "rgba(0, 0, 0, 0.87)", onClick }: LeftArrowProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" onClick={onClick}>
    <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" fill={fill}/>
  </svg>
);
export default LeftArrow;

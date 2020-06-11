import * as React from "react";

type RightArrowProps = {
  className?: string;
  fill?: string;
  onClick?: () => void;
}

const RightArrow = ({ className, fill = "rgba(0, 0, 0, 0.87)", onClick }: RightArrowProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" onClick={onClick}>
    <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" fill={fill}/>
  </svg>
);

export default RightArrow;

import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[19px]", square: "rounded-none" };
const variants = {
  fill: {
    light_blue_A700: "bg-light_blue-A700 text-white-A700",
    blue_300: "bg-blue-300 text-white-A700",
  },
  outline: {
    black_900: "border border-black-900 border-solid text-black-900",
    light_blue_A700:
      "outline outline-[1px] outline-light_blue-A700 text-light_blue-A700",
  },
};
const sizes = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "pl-6 pr-[30px] sm:px-5 py-[30px]",
  lg: "sm:px-5 px-6 py-8",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "light_blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["light_blue_A700", "blue_300", "black_900"]),
};

export { Button };

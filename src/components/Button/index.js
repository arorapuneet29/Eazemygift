import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder9: "rounded-radius946",
  RoundedBorder4: "rounded-radius4",
  RoundedBorder7: "rounded-radius726",
};
const variants = {
  FillIndigoA700: "bg-indigo_A700 text-white_A700",
  OutlineIndigoA700: "border border-indigo_A700 border-solid text-indigo_A700",
};
const sizes = {
  sm: "p-[10px] sm:p-[4px] md:p-[6px]",
  md: "md:p-[10px] p-[17px] sm:px-[15px] sm:py-[8px]",
  lg: "md:p-[13px] p-[21px] sm:px-[15px] sm:py-[10px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf([
    "RoundedBorder9",
    "RoundedBorder4",
    "RoundedBorder7",
  ]),
  variant: PropTypes.oneOf(["FillIndigoA700", "OutlineIndigoA700"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillIndigoA700",
  size: "lg",
};

export { Button };

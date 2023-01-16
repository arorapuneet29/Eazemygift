import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillGray50: "bg-gray_50",
  OutlineWhiteA700: "bg-white_A700 border-2 border-solid border-white_A700",
};
const shapes = { RoundedBorder7: "rounded-radius733" };
const sizes = {
  sm: "pb-[14px] sm:pb-[7px] md:pb-[9px] pt-[11px] sm:pt-[5px] md:pt-[7px] px-[11px] sm:px-[5px] md:px-[7px]",
  md: "p-[11px] sm:p-[5px] md:p-[7px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder7"]),
  variant: PropTypes.oneOf(["FillGray50", "OutlineWhiteA700"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "FillGray50",
  size: "",
};

export { Input };

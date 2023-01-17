import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[67.25px]",
  h2: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "font-bold sm:text-[34px] md:text-[40px] text-[44px]",
  h4: "sm:text-[28px] md:text-[30px] text-[32px]",
  h5: "sm:text-[21.23px] md:text-[23.23px] text-[25.23px]",
  h6: "font-bold text-[18.92px]",
  body1: "text-[18px]",
  body2: "font-bold text-[17.6px]",
  body3: "font-bold text-[17.31px]",
  body4: "text-[14.67px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

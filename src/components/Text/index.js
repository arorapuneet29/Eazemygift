import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[67.25px]",
  h2: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "font-bold sm:text-[34px] md:text-[40px] text-[44px]",
  h4: "font-normal sm:text-[20px] md:text-[26px] text-[40px]",
  h5: "sm:text-[28px] md:text-[30px] text-[32px]",
  h6: "font-normal sm:text-[25.33px] md:text-[27.33px] text-[29.33px]",
  body1: "sm:text-[21.23px] md:text-[23.23px] text-[25.23px]",
  body2: "font-semibold sm:text-[21px] md:text-[23px] text-[25px]",
  body3: "font-normal sm:text-[20.93px] md:text-[22.93px] text-[24.93px]",
  body4: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  body5: "font-bold text-[18.92px]",
  body6: "text-[18px]",
  body7: "font-bold text-[17.6px]",
  body8: "font-bold text-[17.31px]",
  body9: "text-[16.87px]",
  body10: "font-light text-[15px]",
  body11: "text-[14.67px]",
  body12: "font-normal text-[13.2px]",
  body13: "font-normal text-[12.61px]",
  body14: "font-light text-[12px]",
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

import React from "react";

export const Img = ({
  className,
  src = "defaultNoData.jpeg",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};

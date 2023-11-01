import React from "react";

const sizeClasses = {
  txtRobotoSerifRegular18: "font-normal font-robotoserif",
  txtRobotoSerifRegular16: "font-normal font-robotoserif",
  txtRobotoRomanSemiBold18: "font-roboto font-semibold",
  txtRobotoItalicRegular14: "font-normal font-roboto italic",
  txtRobotoSerifRegular14: "font-normal font-robotoserif",
  txtRobotoSerifRegular24: "font-normal font-robotoserif",
  txtRobotoSerifSemiBold16: "font-robotoserif font-semibold",
  txtRobotoSerifNormalRomanMedium16: "font-medium font-robotoserif",
  txtRobotoSerifSemiBold14: "font-robotoserif font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoSerifRegular16Gray800: "font-normal font-robotoserif",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoCondensedBold40: "font-bold font-robotocondensed",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

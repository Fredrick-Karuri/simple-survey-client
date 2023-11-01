import React from "react";

import { Line, Text } from "components";

const ProfileColumntxtfour = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-gray-800 w-auto"
          size="txtRobotoSerifRegular16Gray800"
        >
          {props?.messagetext}
        </Text>
        <div className="relative w-1.5">
          <Line className="absolute bg-black-900 bottom-[0] h-px right-[0] rotate-[-135deg] w-0.5" />
          <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto rotate-[-135deg] w-1.5" />
        </div>
      </div>
    </>
  );
};

ProfileColumntxtfour.defaultProps = { messagetext: "Type your message..." };

export default ProfileColumntxtfour;

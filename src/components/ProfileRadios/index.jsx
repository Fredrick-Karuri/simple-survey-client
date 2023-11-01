import React from "react";

import { Img, Text } from "components";

const ProfileRadios = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[60px] hidden left-[0] top-[9%] w-[60px]"
          src="images/img_uploadsquaresvgrepocom.svg"
          alt="uploadsquaresvg"
        />
        <Text
          className="relative text-black-900 sm:text-left text-lg w-auto sm:w-full"
          size="txtRobotoSerifRegular18"
        >
          {props?.txtfive}
        </Text>
        <div className="absolute bottom-[9%] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              {!!props?.radiotwo ? (
                <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-black-900 rounded-[50%] w-[18px]"></div>
              ) : null}
              {!!props?.txtsix ? (
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoSerifRegular16"
                >
                  {props?.txtsix}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              {!!props?.radiotwo ? (
                <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-black-900 rounded-[50%] w-[18px]"></div>
              ) : null}
              {!!props?.txtsix ? (
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoSerifRegular16"
                >
                  {props?.txtsix}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              {!!props?.radiotwo ? (
                <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-black-900 rounded-[50%] w-[18px]"></div>
              ) : null}
              {!!props?.txtsix ? (
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoSerifRegular16"
                >
                  {props?.txtsix}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProfileRadios.defaultProps = { txtfive: "What is your gender?" };

export default ProfileRadios;

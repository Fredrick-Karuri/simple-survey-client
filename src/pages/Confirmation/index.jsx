import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-robotocondensed items-center justify-start mx-auto py-12 sm:py-8  w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 h-[90vh] sm:h-[Autovh] md:h-[] md:items-center items-start justify-between pb-10 sm:pb-0 pt-6 md:px-5 md:w-[50vw] w-auto sm:w-screen md:h-full sm:h-[72vh] md:h-[84vh]">
          <div className="flex flex-col items-center justify-start w-[560px] sm:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold40"
            >
              Sky World Survey
            </Text>
          </div>
          <div className="border border-black-900 border-solid flex flex-col font-robotoserif gap-6 items-center justify-start sm:px-5 px-6 py-8 rounded md:w-auto w-full">
            <Img
              className="h-10 w-10"
              src="images/img_icons_light_blue_a700.svg"
              alt="icons"
            />
            <Text
              className="leading-[120.00%] md:max-w-full max-w-lg text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
              size="txtRobotoSerifRegular24"
            >
              Thank you for completing the survey! Your responses have been
              successfully submitted and recorded. We appreciate your time and
              effort in providing this valuable information.
            </Text>
          </div>
          <div className="flex flex-col font-robotoserif items-start justify-start w-full">
            <Button
              className="common-pointer cursor-pointer outline outline-[1px] outline-light_blue-A700 text-base text-center w-full"
              onClick={() => navigate("/")}
              shape="round"
              size="sm"
            >
              Back to home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;

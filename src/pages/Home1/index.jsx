import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-robotocondensed items-center justify-start mx-auto py-12 sm:py-8 w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-16 gap-20  h-full items-start md:items-start justify-between pb-20 sm:pb-0  sm:pt-0 md:px-5 w-auto sm:w-full h-[64vh] ">
          <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col items-center justify-start w-[560px] sm:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-full"
                size="txtRobotoCondensedBold40"
              >
                Sky World Limited Survey
              </Text>
            </div>
            <div className="flex flex-col font-robotoserif items-center justify-start w-[560px] sm:w-full">
              <Text
                className="leading-[120.00%] max-w-[560px] md:max-w-full text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtRobotoSerifRegular24"
              >
                Welcome to Sky World Limited’s online survey platform! We’re
                thrilled to have you here. This platform is designed to gather
                valuable insights from our esteemed users like you. You have two
                options on this platform:
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-roboto gap-10 sm:gap-4 items-start justify-start w-full">
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center rounded w-full"
              onClick={() => navigate("/profile")}
              rightIcon={
                <Img
                  className="h-10 ml-[35px]"
                  src="images/img_icons.svg"
                  alt="Icons"
                />
              }
              color="black_900"
              size="lg"
              variant="outline"
            >
              <div className="md:text-[22px] sm:text-xl text-2xl text-left">
                Take Survey
              </div>
            </Button>
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center rounded w-full"
              onClick={() => navigate("/responses")}
              rightIcon={
                <Img
                  className="h-10 ml-[35px]"
                  src="images/img_icons_blue_300.svg"
                  alt="Icons"
                />
              }
              color="black_900"
              size="lg"
              variant="outline"
            >
              <div className="md:text-[22px] sm:text-xl text-2xl text-left">
                View Survey Responses
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;

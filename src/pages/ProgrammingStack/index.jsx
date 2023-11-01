import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import ProfileRadios from "components/ProfileRadios";

const ProgrammingStackPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-robotoserif items-center justify-start mx-auto py-20 w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 h-[864px] md:h-auto items-start justify-center md:px-5 w-auto sm:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-[560px] sm:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold40"
            >
              Sky World Survey Form
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
              size="txtRobotoSerifRegular24"
            >
              Please take a minute to help us know you.
            </Text>
          </div>
          <div className="flex flex-col h-full items-start justify-between pt-4 w-full">
            <div className="flex flex-col gap-4 h-[595px] md:h-auto items-start justify-center w-auto sm:w-full">
              <ProfileRadios
                className="flex py-4"
                txtfive={
                  <Text className="ml-[-60px] mr-auto mt-auto text-black-900 text-lg w-auto z-[1]">
                    <span className="text-black-900 font-robotoserif text-left font-normal">
                      What programming stack are you familiar with? (C
                    </span>
                    <span className="text-black-900 font-roboto text-left text-base font-normal italic">
                      heck all that apply)
                    </span>
                  </Text>
                }
              />
              <div className="flex flex-col gap-0.5 items-start justify-center w-auto">
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSerifRegular16"
                  >
                    React
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSerifRegular16"
                  >
                    Angular JS
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSerifRegular16"
                  >
                    Vue JS’
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSerifRegular16"
                  >
                    MySQL
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSerifRegular16"
                  >
                    Rust
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoSerifRegular16"
                  >
                    JS
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSerifRegular16"
                  >
                    SQL
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-auto">
                  <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                    <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoSerifRegular16"
                    >
                      Go
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-auto">
                  <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                    <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoSerifRegular16"
                    >
                      Java
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSerifRegular16"
                  >
                    PHP
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                  <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtRobotoSerifRegular16"
                  >
                    Postgres
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-auto">
                  <div className="flex flex-row gap-3 items-center justify-start pb-4 w-auto">
                    <div className="bg-white-A700 h-[18px] outline outline-[1px] outline-blue-300 w-[18px]"></div>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtRobotoSerifRegular16"
                    >
                      Microsoft SQL Server
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-row gap-10 items-start justify-start w-full">
                <Button
                  className="common-pointer cursor-pointer flex-1 rounded-[13px] text-base text-center w-full"
                  onClick={() => navigate("/profile")}
                  size="sm"
                  variant="outline"
                >
                  Previous
                </Button>
                <Button
                  className="common-pointer cursor-pointer flex-1 outline outline-[1px] outline-light_blue-A700 text-base text-center w-full"
                  onClick={() => navigate("/certificateupload")}
                  shape="round"
                  size="sm"
                >
                  Next
                </Button>
              </div>
              <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                <Button
                  className="border border-black-900 border-solid cursor-pointer h-10 text-base text-center w-10"
                  shape="square"
                  color="blue_300"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer h-10 text-base text-center w-10"
                  shape="square"
                  color="black_900"
                  variant="outline"
                >
                  2
                </Button>
                <div className="flex flex-col h-10 items-center justify-start rounded-lg w-10">
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtRobotoSerifRegular16"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammingStackPage;

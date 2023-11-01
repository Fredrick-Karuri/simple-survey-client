import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import ProfileColumntxtfour from "components/ProfileColumntxtfour";
import ProfileRadios from "components/ProfileRadios";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto py-20 w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 h-full items-center justify-start md:px-5 w-auto sm:w-full">
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
          <div className="flex flex-col gap-6 items-center justify-start w-[560px] sm:w-full">
            <div className="flex flex-col items-start justify-end w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-end justify-start w-full">
                <div className="flex relative">
                  <div className="flex flex-col gap-2 items-start justify-start my-auto w-full">
                    <Text
                      className="text-black-900 text-lg w-[Auto%]"
                      size="txtRobotoSerifRegular18"
                    >
                      What is your full name?
                    </Text>
                    <Input
                      name="textinput"
                      placeholder="Name"
                      className="font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                      wrapClassName="outline outline-[1px] outline-black-900 w-[82%]"
                      type="text"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[-14.33px] mt-auto w-full z-[1]">
                    <Text
                      className="bg-white-A700 justify-center outline outline-[1px] outline-black-900 px-3 py-[13px] text-black-900_7f text-sm w-full"
                      size="txtRobotoRegular14"
                    >
                      Other Names (optional)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="bg-white-A700 justify-center outline outline-[1px] outline-black-900 pl-3 sm:pr-5 pr-[35px] py-[13px] text-black-900_7f text-sm w-full"
                    size="txtRobotoRegular14"
                  >
                    Last Name
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoSerifRegular18"
              >
                What is your Email Address?
              </Text>
              <Input
                name="textinputthree"
                placeholder="Email"
                className="font-roboto p-0 placeholder:text-black-900_7f text-left text-sm w-full"
                wrapClassName="outline outline-[1px] outline-black-900 w-full"
                type="email"
              ></Input>
            </div>
            <div className="flex flex-col font-robotoserif gap-2 items-start justify-start w-full">
              <Text
                className="text-black-900 text-lg w-full"
                size="txtRobotoSerifRegular18"
              >
                Tell us a bit more about yourself
              </Text>
              <ProfileColumntxtfour className="bg-white-A700 flex flex-col md:gap-10 gap-[117px] h-40 md:h-auto items-start justify-start outline outline-[1px] outline-black-900 p-3 w-full" />
            </div>
            <ProfileRadios
              className="font-robotoserif md:h-[100px] h-[175px] py-4 relative w-full"
              gender="Male"
              genderOne="Male"
              txtsix="Male"
            />
            <div className="flex flex-col font-robotoserif gap-6 items-center justify-start w-full">
              <Button
                className="common-pointer cursor-pointer outline outline-[1px] outline-black-900 text-base text-center w-full"
                onClick={() => navigate("/programmingstack")}
                shape="round"
                size="sm"
              >
                Next
              </Button>
              <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer h-10 text-base text-center w-10"
                  shape="square"
                  color="black_900"
                  variant="outline"
                >
                  1
                </Button>
                <List
                  className="sm:flex-col flex-row gap-0.5 grid grid-cols-2 w-[67%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                      <Text
                        className="text-base text-black-900 text-center w-auto"
                        size="txtRobotoSerifRegular16"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                      <Text
                        className="text-base text-black-900 text-center w-auto"
                        size="txtRobotoSerifRegular16"
                      >
                        3
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

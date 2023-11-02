import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const ReviewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto py-12 md:py-8 w-auto sm:w-full md:w-full  ">
        <div className="flex flex-col gap-8 items-start justify-center pb-10 md:px-5 w-auto sm:w-full">
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
              Review you responses
            </Text>
          </div>
          <div className="flex flex-col gap-[34px] items-center justify-start pt-8 w-[560px] sm:w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="border border-black-900 border-solid flex flex-col items-start justify-start p-6 sm:px-5 rounded w-full">
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-between w-full">
                  <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                    <div className="flex flex-row gap-6 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRobotoRomanSemiBold18"
                      >
                        Name
                      </Text>
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRobotoRegular18"
                      >
                        Jane Doe
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-2 gap-6 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRobotoRomanSemiBold18"
                      >
                        Description
                      </Text>
                      <Text
                        className="flex-1 leading-[150.00%] max-w-[324px] md:max-w-full text-black-900 text-lg"
                        size="txtRobotoRegular18"
                      >
                        I am an experienced FrontEnd Engineer with over 6 years
                        experience.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRobotoRomanSemiBold18"
                      >
                        Gender
                      </Text>
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRobotoRegular18"
                      >
                        Female
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start w-auto">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRobotoRomanSemiBold18"
                      >
                        Email
                      </Text>
                      <a
                        href="mailto:Janedoe@gmail.com"
                        className="text-black-900 text-lg w-auto"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text>Janedoe@gmail.com</Text>
                      </a>
                    </div>
                  </div>
                  <div
                    className="common-pointer sm:absolute flex flex-col items-start justify-start sm:left-[] sm:p-[] sm:pl-2 sm:pt-1 px-2 py-1 sm:right-6 sm:top-[] w-auto"
                    onClick={() => navigate("/profile")}
                  >
                    <Img
                      className="h-6 w-6"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                <div className="border border-black-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-full"
                        size="txtRobotoRomanSemiBold18"
                      >
                        Programming stack
                      </Text>
                      <div className="flex flex-row gap-6 items-start justify-start w-auto">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtRobotoRegular18"
                        >
                          React
                        </Text>
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtRobotoRegular18"
                        >
                          Vue
                        </Text>
                      </div>
                    </div>
                    <div
                    className="common-pointer sm:absolute flex flex-col items-start justify-start sm:left-[] sm:p-[] sm:pl-2 sm:pt-1 px-2 py-1 sm:right-6 sm:top-[] w-auto"
                    onClick={() => navigate("/programmingstack")}
                  >
                    <Img
                      className="h-6 w-6"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                  </div>
                  </div>
                </div>
                <div className="border border-black-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg w-full"
                        size="txtRobotoRomanSemiBold18"
                      >
                        Certificates
                      </Text>
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtRobotoRegular18"
                        >
                          Adobe Certification 19-08-2023.pdf
                        </Text>
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtRobotoRegular18"
                        >
                          Figma Fundamentals 19-08-2023.pdf
                        </Text>
                      </div>
                    </div>
                    <div
                    className="common-pointer sm:absolute flex flex-col items-start justify-start sm:left-[] sm:p-[] sm:pl-2 sm:pt-1 px-2 py-1 sm:right-6 sm:top-[] w-auto"
                    onClick={() => navigate("/certificateupload")}
                  >
                    <Img
                      className="h-6 w-6"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                  </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col font-robotoserif gap-6 items-center justify-start w-full">
              <Button
                className="common-pointer cursor-pointer outline outline-[1px] outline-black-900 text-base text-center w-full"
                onClick={() => navigate("/confirmation")}
                shape="round"
                size="sm"
              >
                Submit
              </Button>
              <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                <Button
                  className="border border-black-900 border-solid cursor-pointer h-10 text-base text-center w-10"
                  shape="square"
                  color="blue_300"
                >
                  1
                </Button>
                <Button
                  className="border border-black-900 border-solid cursor-pointer h-10 text-base text-center w-10"
                  shape="square"
                  color="blue_300"
                >
                  2
                </Button>
                <Button
                  className="border border-black-900 border-solid cursor-pointer h-10 text-base text-center w-10"
                  shape="square"
                  color="blue_300"
                >
                  3
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;

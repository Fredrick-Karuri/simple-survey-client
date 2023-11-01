import React from "react";

import { Input } from "components";

export default {
  title: "simple_survey_client/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "square",
  color: "white_A700",
  size: "sm",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};

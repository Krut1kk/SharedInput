import { Input } from "./Input";
import "@/app/styles/reset.scss";
import "@/app/styles/font.scss";

import IconSearch from "@/shared/libs/assets/images/svg/searchIcon.svg?react";

const meta = {
  title: "shared/Input",
  component: Input,
  argTypes: {
    isDarkMode: {
      control: "boolean",
    },
    value: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "extraLarge"],
    },
    placeHolderSize: {
      control: "select",
      options: ["small", "medium"],
    },
    placeholder: {
      control: "text",
    },
    leftSideIcon: {
      control: "boolean",
    },
    rightSideIconFirst: {
      control: "boolean",
    },
    tooltipMessage: {
      control: "boolean",
    },
    helperText: {
      control: "boolean",
    },
    isRequired: {
      control: "boolean",
    },
    isBorderDisabled: {
      control: "boolean",
    },
    shoudAddShortKey: {
      control: "boolean",
    },
    hasError: {
      control: "boolean",
    },
  },
  args: {
    placeholder: "Enter your email",
  },
};
export default meta;

const InputTemplate = (args) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50dvh",
        backgroundColor: args.isDarkMode ? "#1A1A1E" : "#ffffff",
      }}
    >
      <Input
        {...args}
        leftSideIcon={args.leftSideIcon ? <IconSearch /> : undefined}
        rightSideIconFirst={
          args.rightSideIconFirst ? <IconSearch /> : undefined
        }
        tooltipMessage={args.tooltipMessage ? "Tooltip text" : undefined}
        helperText={args.helperText ? "Это текст-подсказка" : ""}
      />
    </div>
  );
};

export const Primary = (args) =>
  InputTemplate({
    leftSideIcon: true,
    rightSideIconFirst: true,
    label: "Email",
    placeholder: "Enter your email",
    tooltipMessage: true,
    helperText: true,
    shoudAddShortKey: true,
    ...args,
  });

export const PrimaryWithError = (args) =>
  InputTemplate({
    leftSideIcon: true,
    rightSideIconFirst: true,
    label: "Email",
    placeholder: "Enter your email",
    tooltipMessage: true,
    helperText: true,
    hasError: true,
    shoudAddShortKey: true,
    ...args,
  });

export const PrimaryDisabled = (args) =>
  InputTemplate({
    leftSideIcon: true,
    rightSideIconFirst: true,
    label: "Email",
    placeholder: "Enter your email",
    tooltipMessage: true,
    helperText: true,
    disabled: true,
    shoudAddShortKey: true,
    ...args,
  });

export const Default = (args) =>
  InputTemplate({
    placeholder: "Enter your email",
    ...args,
  });

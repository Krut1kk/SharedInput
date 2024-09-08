// react
import { ChangeEvent, CSSProperties, FC, ReactNode, useState } from "react";
// libs
import classNames from "classnames";
// assets
import ShortKeyIcon from "@/shared/libs/assets/images/svg/shortKeyIcon.svg?react";
// ui
import { Tooltip } from "../Tooltip/Tooltip";
// styles
import styles from "./Input.module.scss";

export interface InputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  helperText?: string;
  size?: "small" | "medium" | "large" | "extraLarge";
  disabled?: boolean;
  leftSideIcon?: ReactNode;
  rightSideIconFirst?: ReactNode;
  shoudAddShortKey?: boolean;
  hasError?: boolean;
  isRequired?: boolean;
  isBorderDisabled?: boolean;
  maxWidth?: CSSProperties["maxWidth"];
  tooltipMessage?: ReactNode;
  placeHolderSize?: "small" | "medium";
  isDarkMode?: boolean;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  helperText,
  leftSideIcon,
  rightSideIconFirst,
  tooltipMessage,
  isDarkMode,
  size = "medium",
  disabled = false,
  placeHolderSize = "small",
  hasError = false,
  maxWidth = "245px",
  isRequired = false,
  isBorderDisabled = false,
  shoudAddShortKey = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onToggleFocusAndBlur = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div className={styles.inputContainer} style={{ maxWidth: maxWidth }}>
      {label && (
        <label
          htmlFor="input"
          className={classNames(styles.label, {
            [styles.textSmall]: size === "small" || size === "medium",
            [styles.textLarge]: size === "large" || size === "extraLarge",
            [styles.darkModeLabel]: isDarkMode,
            [styles.darkModeDisabledLabel]: isDarkMode && disabled,
          })}
        >
          {label} {isRequired && <span className={styles.required}>*</span>}{" "}
          {tooltipMessage && <Tooltip>{tooltipMessage}</Tooltip>}
        </label>
      )}
      <div
        className={classNames(styles.inputWrapper, {
          [styles.disabled]: disabled && !isDarkMode,
          [styles.small]: size === "small",
          [styles.medium]: size === "medium",
          [styles.large]: size === "large",
          [styles.extraLarge]: size === "extraLarge",
          [styles.focused]: isFocused && !hasError && !disabled && !isDarkMode,
          [styles.error]: hasError && !disabled && !isDarkMode,
          [styles.errorFocus]:
            hasError && isFocused && !disabled && !isDarkMode,
          [styles.darkModeInputWrapper]: isDarkMode,
          [styles.darkModeInputWrapperFocus]:
            isFocused && !hasError && !disabled && isDarkMode,
          [styles.darkModeInputWrapperError]:
            hasError && isDarkMode && !disabled,
          [styles.darkModeInputWrapperErrorFocus]:
            hasError && isFocused && !disabled && isDarkMode,
          [styles.darkModeInputWrapperDisabled]: disabled && isDarkMode,
          [styles.inputWrapperBorderDisabled]: isBorderDisabled,
        })}
      >
        {leftSideIcon && (
          <span
            className={classNames(styles.icon, {
              [styles.iconError]: hasError && !disabled && !isDarkMode,
              [styles.iconDisabled]: disabled && !isDarkMode,
              [styles.darkModeIcon]: isDarkMode,
            })}
          >
            {leftSideIcon}
          </span>
        )}
        <input
          id="input"
          className={classNames(styles.input, {
            [styles.disabled]: disabled && !isDarkMode,
            [styles.textSmall]: size === "small" || size === "medium",
            [styles.textLarge]: size === "large" || size === "extraLarge",
            [styles.placeHolderSmall]: placeHolderSize === "small",
            [styles.placeHolderMedium]: placeHolderSize === "medium",
            [styles.darkModeInput]: isDarkMode,
            [styles.darkModeDisabledInput]: isDarkMode && disabled,
          })}
          onFocus={onToggleFocusAndBlur}
          onBlur={onToggleFocusAndBlur}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />
        {rightSideIconFirst && (
          <span
            className={classNames(styles.icon, {
              [styles.iconError]: hasError && !disabled && !isDarkMode,
              [styles.iconDisabled]: disabled,
              [styles.darkModeIcon]: isDarkMode,
            })}
          >
            {rightSideIconFirst}
          </span>
        )}
        {shoudAddShortKey && (
          <span
            className={classNames(styles.shortKeyIcon, {
              [styles.darkModeShortKeyIcon]: isDarkMode,
            })}
          >
            {<ShortKeyIcon />}
          </span>
        )}
      </div>
      {helperText && (
        <div
          className={classNames(styles.hint, {
            [styles.errorText]: hasError && !isDarkMode,
            [styles.darkModeHint]: isDarkMode,
            [styles.darkModeErrorText]: hasError && isDarkMode,
            [styles.darkModeDisabledHint]: disabled && isDarkMode,
          })}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import DisneyPlusHotstarPrimaryButton from "./disney-plus-hotstar-primary-button.component";
import DisneyPlusHotstarSecondaryButton from "./disney-plus-hotstar-secondary-button.component";
import SecondaryButton from "./secondary.component";
import PrimaryButton from "./primary.component";

export enum ButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  DISNEY_PLUS_HOTSTAR_PRIMARY = "disney-plus-hotstar-primary",
  DISNEY_PLUS_HOTSTAR_SECONDARY = "disney-plus-hotstar-secondary",
}

export enum ButtonVariant {
  OUTLINE = "outline",
  SOLID = "solid",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  fullWidth?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariant;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color,
  fullWidth,
  isLoading,
  variant,
  ...otherProps
}) => {
  switch(color) {
    case ButtonColor.SECONDARY:
      return (
        <SecondaryButton
          fullWidth={fullWidth}
          isLoading={isLoading}
          variant={variant}
          {...otherProps}
        >
          {children}
        </SecondaryButton>
      );
    case ButtonColor.DISNEY_PLUS_HOTSTAR_PRIMARY:
      return (
        <DisneyPlusHotstarPrimaryButton
          fullWidth={fullWidth}
          isLoading={isLoading}
          variant={variant}
          {...otherProps}
        >
          {children}
        </DisneyPlusHotstarPrimaryButton>
      );
    case ButtonColor.DISNEY_PLUS_HOTSTAR_SECONDARY:
      return (
        <DisneyPlusHotstarSecondaryButton
          fullWidth={fullWidth}
          isLoading={isLoading}
          variant={variant}
          {...otherProps}
        >
          {children}
        </DisneyPlusHotstarSecondaryButton>
      );
    default:
      return (
        <PrimaryButton
          fullWidth={fullWidth}
          isLoading={isLoading}
          variant={variant}
          {...otherProps}
        >
          {children}
        </PrimaryButton>
      );
  }
}

export default Button;

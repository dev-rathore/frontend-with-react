import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import PrimaryButton from "./primary-button.component";
import SecondaryButton from "./secondary-button.component";

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export enum ButtonVariant {
  Outline = "outline",
  Solid = "solid",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  fullWidth?: boolean;
  variant?: ButtonVariant;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color,
  fullWidth,
  variant,
  ...otherProps
}) => {
  switch(color) {
    case ButtonColor.Secondary:
      return (
        <SecondaryButton
          fullWidth={fullWidth}
          variant={variant}
          {...otherProps}
        >
          {children}
        </SecondaryButton>
      );
    default:
      return (
        <PrimaryButton
          fullWidth={fullWidth}
          variant={variant}
          {...otherProps}
        >
          {children}
        </PrimaryButton>
      );
  }
}

export default Button;

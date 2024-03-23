import React, { PropsWithChildren } from "react";
import { ButtonProps, ButtonVariant } from "./button.component";
import Spinner, { SpinnerKind } from "../spinner/spinner.component";

const PrimaryButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  fullWidth,
  ...props
}) => {
  const fullWidthClass = fullWidth ? "w-full" : "";

  switch (props.variant) {
    case ButtonVariant.OUTLINE:
      return (
        <button
          className={`${fullWidthClass} flex items-center py-3 px-5 font-semibold rounded-md border border-blue-500 text-blue-700`}
          style={{
            transition: 'transform 0.3s ease-in-out',
          }}
          {...props}
        >
          {props.isLoading? <Spinner kind={SpinnerKind.SECONDARY} size="size-6"/> : children}
        </button>
      );
    default:
      return (
        <button
          className={`${fullWidthClass} flex items-center justify-center py-3 px-5 font-semibold rounded-md text-white bg-blue-500`}
          style={{
            transition: 'transform 0.3s ease-in-out',
          }}
          {...props}
        >
          {props.isLoading? <Spinner kind={SpinnerKind.SECONDARY} size="size-6"/> : children}
        </button>
      );
  }
}

export default PrimaryButton;
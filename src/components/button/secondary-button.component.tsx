import React, { PropsWithChildren } from "react";
import { ButtonProps, ButtonVariant } from "./button.component";

const SecondaryButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  const fullWidthClass = props.fullWidth ? "w-full" : "";

  switch (props.variant) {
    case ButtonVariant.Outline:
      return (
        <button
          className={`${fullWidthClass} py-3 px-5 font-semibold rounded-md hover:scale-105 border border-slate-200 text-slate-900`}
          style={{
            transition: 'transform 0.3s ease-in-out',
          }}
          {...props}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className={`${fullWidthClass} py-3 px-5 font-semibold rounded-md hover:scale-105 text-white`}
          style={{
            backgroundColor: '#282A30',
            transition: 'transform 0.3s ease-in-out',
          }}
          {...props}
        >
          {children}
        </button>
      );
  }
}

export default SecondaryButton;

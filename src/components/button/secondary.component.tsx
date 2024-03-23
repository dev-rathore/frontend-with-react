import React, { PropsWithChildren } from "react";
import { ButtonProps, ButtonVariant } from "./button.component";

const SecondaryButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  const fullWidthClass = props.fullWidth ? "w-full" : "";

  switch (props.variant) {
    case ButtonVariant.OUTLINE:
      return (
        <button
          className={`${fullWidthClass} py-3 px-5 font-semibold rounded-md border border-slate-200 text-slate-900`}
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
          className={`${fullWidthClass} py-3 px-5 font-semibold rounded-md`}
          style={{
            backgroundColor: '#E1E6F0',
            color: '#1E2023',
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

import React from 'react';

export enum SpinnerKind {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface SpinnerProps {
  kind?: SpinnerKind;
  size?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  kind = SpinnerKind.PRIMARY,
  size = 'size-12',
}) => (
  <div
    className={`
      inline-block
      ${size}
      animate-spin
      rounded-full
      border-4
      border-solid
      ${kind === SpinnerKind.PRIMARY ? 'border-primary' : 'border-white'}
      border-r-transparent
      align-[-0.125em]
      motion-reduce:animate-[spin_1.5s_linear_infinite]
    `}
  />
);

export default Spinner;

import React from 'react';

import Spinner, { SpinnerKind } from '../spinner/spinner.component';

interface LoaderProps {
  height?: string;
  width?: string;
}

const Loader: React.FC<LoaderProps> = ({
  height = 'min-h-screen',
  width = 'w-full',
}) => (
  <div className={`flex items-center justify-center ${width} ${height}`}>
    <Spinner kind={SpinnerKind.PRIMARY} />
  </div>
);

export default Loader;
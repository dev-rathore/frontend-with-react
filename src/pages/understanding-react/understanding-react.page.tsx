import React, { PropsWithChildren } from "react";

interface ReactComponentProps {
  isBoolean: boolean;
}

const ReactComponent: React.FC<PropsWithChildren<ReactComponentProps & { ref?: React.Ref<HTMLDivElement> }>> = ({
  children,
  isBoolean,
  ref,
}) => {
  console.log(ref);

  return (
    <div>
      React Component - {isBoolean.toString()} - {" "}
      {children}
      
    </div>
  );
};

const UnderstandingReact: React.FC = () => {
  const compRef = React.useRef<HTMLDivElement>(null);

  console.log(
    <ReactComponent
      ref={compRef}
      isBoolean={true}
      key={'key-1'}
    >
      <div><h1>I am a child</h1></div>
    </ReactComponent>
  );
  return (
    <div>
      Understanding React
      <ReactComponent isBoolean={true} key={'key-2'}>I am a child</ReactComponent>
    </div>
  );
};

export default UnderstandingReact;

import React from "react";
import { ErrorBlock } from "../../components";
import { routes } from "../../routes/routes";

const Four0Four: React.FC = () => {
  return (
    <ErrorBlock
      cta={{
        href: routes.DASHBOARD,
        text: 'home',
      }}
      messages={["Oops! Looks like you're lost."]}
      title='404'
    />
  );
}

export default Four0Four;

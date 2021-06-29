import { forwardRef } from "react";

import { DDLBodyWrapper } from "./DDLBody.styled";

const DDLBody = forwardRef((props, ref) => {
  const { children, dropped } = props;

  return (
    <DDLBodyWrapper ref={ref} dropped={dropped}>
      {children}
    </DDLBodyWrapper>
  );
});

export default DDLBody;

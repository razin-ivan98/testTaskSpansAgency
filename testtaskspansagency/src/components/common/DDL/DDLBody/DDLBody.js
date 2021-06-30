import { DDLBodyWrapper } from "./DDLBody.styled";

const DDLBody = (props) => {
  const { children, dropped } = props;

  return <DDLBodyWrapper dropped={dropped}>{children}</DDLBodyWrapper>;
};

export default DDLBody;

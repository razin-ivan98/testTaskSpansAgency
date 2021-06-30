import { DDLItemWrapper } from "./DDLItem.styled";

const DDLItem = (props) => {
  return <DDLItemWrapper>{props.children}</DDLItemWrapper>;
};

export default DDLItem;

import { DDLHeaderWpapper, DDLArrowWrapper } from "./DDLHeader.styled";

const DDLHeader = (props) => {
  const { title, onClick, dropped } = props;
  return (
    <DDLHeaderWpapper onClick={onClick}>
      {title}
      <DDLArrowWrapper dropped={dropped} />
    </DDLHeaderWpapper>
  );
};

export default DDLHeader;

import { DDLHeaderWpapper, DDLArrowWrapper } from "./DDLHeader.styled";

const DDLHeader = (props) => {
  const { title, onClick, dropped, variant } = props;
  return (
    <DDLHeaderWpapper variant={variant} onClick={onClick}>
      {title}
      <DDLArrowWrapper dropped={dropped} />
    </DDLHeaderWpapper>
  );
};

export default DDLHeader;

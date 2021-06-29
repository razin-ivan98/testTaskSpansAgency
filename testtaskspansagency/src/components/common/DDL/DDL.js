import { useState, useEffect, useRef } from "react";
import { DDLWrapper } from "./DDL.styled";
import DDLHeader from "./DDLHeader/DDLHeader";
import DDLBody from "./DDLBody/DDLBody";

function DDL(props) {
  const { children, title } = props;

  const [dropped, changeDropped] = useState(false);

  const clickHandle = () => {
    changeDropped(!dropped);
  };

  const ref = useRef(null);

  const onClickOuterDDL = (e) => {
    if (dropped && ref.current !== e.target) {
      clickHandle();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOuterDDL, false);

    return () => {
      document.removeEventListener("click", onClickOuterDDL, false);
    };
  });

  return (
    <DDLWrapper>
      <DDLHeader dropped={dropped} onClick={clickHandle} title={title} />
      <DDLBody ref={ref} dropped={dropped}>
        {children}
      </DDLBody>
    </DDLWrapper>
  );
}

export default DDL;

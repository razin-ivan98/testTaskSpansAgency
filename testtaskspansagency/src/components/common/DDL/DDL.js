import { useState } from "react";
import { DDLWrapper } from "./DDL.styled";
import DDLHeader from "./DDLHeader/DDLHeader";
import DDLBody from "./DDLBody/DDLBody";

function DDL(props) {
  const { children, title, variant } = props;

  const [dropped, changeDropped] = useState(false);

  const clickHandle = () => {
    changeDropped(!dropped);
  };

  // const ref = useRef(null);

  // useEffect(() => {
  //   const onClickOuterDDL = () => {
  //     if (dropped) {
  //       clickHandle();
  //     }
  //   };
  //   document.addEventListener("click", onClickOuterDDL, false);

  //   return () => {
  //     document.removeEventListener("click", onClickOuterDDL, false);
  //   };
  //   // eslint-disable-next-line
  // }, []);

  return (
    <DDLWrapper>
      <DDLHeader
        onClick={clickHandle}
        dropped={dropped}
        title={title}
        variant={variant}
      />
      {dropped && <DDLBody dropped={dropped}>{children}</DDLBody>}
    </DDLWrapper>
  );
}

export default DDL;

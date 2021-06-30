import { ItemImgWrapper, SportDDLWrapper } from "./SportDDL.styled";
import DDL from "../../common/DDL/DDL";
import DDLItem from "../../common/DDL/DDLItem";

import football from "./football.png";

const SportDDL = () => {
  return (
    <SportDDLWrapper>
      <DDL
        title={<ItemImgWrapper src={football} alt="football" />}
        variant="light"
      >
        <DDLItem>
          <ItemImgWrapper src={football} alt="football" />
        </DDLItem>
        <DDLItem>
          <ItemImgWrapper src={football} alt="football" />
        </DDLItem>
      </DDL>
    </SportDDLWrapper>
  );
};

export default SportDDL;

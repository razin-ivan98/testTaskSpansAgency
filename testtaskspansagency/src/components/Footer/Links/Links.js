import {
  LinksWrapper,
  LinksColumnWrapper,
  LinksItemWrapper,
  LinksItemHeadWrapper,
} from "./Links.styled";

import Link from "../../common/Link/Link";

const Links = () => {
  return (
    <LinksWrapper>
      <LinksColumnWrapper>
        <LinksItemHeadWrapper>Разделы</LinksItemHeadWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Главная
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Расписание
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Игровые отчеты
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Статистика
          </Link>
        </LinksItemWrapper>
      </LinksColumnWrapper>

      <LinksColumnWrapper>
        <LinksItemHeadWrapper>Виды спорта</LinksItemHeadWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Футбол
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Баскетбол
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Волейбол
          </Link>
        </LinksItemWrapper>
      </LinksColumnWrapper>

      <LinksColumnWrapper>
        <LinksItemHeadWrapper>Полезное</LinksItemHeadWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Как записаться?
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Ответы на вопросы
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Достижения
          </Link>
        </LinksItemWrapper>
      </LinksColumnWrapper>

      <LinksColumnWrapper>
        <LinksItemHeadWrapper>Че почем</LinksItemHeadWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Абонементы
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            Корп. клиентам
          </Link>
        </LinksItemWrapper>
        <LinksItemWrapper>
          <Link variant="light" href="/#">
            ПАртнерам
          </Link>
        </LinksItemWrapper>
      </LinksColumnWrapper>
    </LinksWrapper>
  );
};

export default Links;

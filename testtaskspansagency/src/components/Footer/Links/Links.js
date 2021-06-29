import {
  LinksWrapper,
  LinksColumnWrapper,
  LinksItemWrapper,
  LinksItemHeadWrapper,
} from "./Links.styled";

const Links = () => {
  return (
    <LinksWrapper>
      <LinksColumnWrapper>
        <LinksItemHeadWrapper>Разделы</LinksItemHeadWrapper>
        <LinksItemWrapper>Главная</LinksItemWrapper>
        <LinksItemWrapper>Расписание</LinksItemWrapper>
        <LinksItemWrapper>Игровые отчеты</LinksItemWrapper>
        <LinksItemWrapper>Статистика</LinksItemWrapper>
      </LinksColumnWrapper>

      <LinksColumnWrapper>
        <LinksItemHeadWrapper>Виды спорта</LinksItemHeadWrapper>
        <LinksItemWrapper>Футбол</LinksItemWrapper>
        <LinksItemWrapper>Баскетбол</LinksItemWrapper>
        <LinksItemWrapper>Волейбол</LinksItemWrapper>
      </LinksColumnWrapper>

      <LinksColumnWrapper>
        <LinksItemHeadWrapper>Полезное</LinksItemHeadWrapper>
        <LinksItemWrapper>Как записаться?</LinksItemWrapper>
        <LinksItemWrapper>Ответы на вопросы</LinksItemWrapper>
        <LinksItemWrapper>Достижения</LinksItemWrapper>
      </LinksColumnWrapper>

      <LinksColumnWrapper>
        <LinksItemHeadWrapper>Че почем</LinksItemHeadWrapper>
        <LinksItemWrapper>Абонементы</LinksItemWrapper>
        <LinksItemWrapper>Корп. клиентам</LinksItemWrapper>
        <LinksItemWrapper>ПАртнерам</LinksItemWrapper>
      </LinksColumnWrapper>
    </LinksWrapper>
  );
};

export default Links;

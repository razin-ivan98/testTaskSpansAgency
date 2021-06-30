import { LinkWrapper } from "./Link.styled";

const Link = (props) => {
  const { children, variant, href } = props;
  return (
    <LinkWrapper href={href} variant={variant}>
      {children}
    </LinkWrapper>
  );
};

export default Link;

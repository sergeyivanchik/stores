import { ReactComponent as Logo } from '@/assets/icons/logo.svg';

import { HeaderStyled } from './header.styles';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  );
};

export { Header };

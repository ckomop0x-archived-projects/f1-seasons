import { HeaderStyled, Logo } from '../styles';
import logoImage from '../../icons/racing.svg';

export default function Header() {
  return (
    <HeaderStyled>
      <Logo href="/" title="Formula 1 winners application" data-cy="logo">
        <img src={logoImage} alt="Formula 1 winners application" />
        <span className="logo-title">F1 Standings</span>
      </Logo>
    </HeaderStyled>
  );
}

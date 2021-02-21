import * as S from './styles';
import LogoImg from '../../../assets/logo.svg';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

export const Presentational = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={LogoImg} alt='Logo Minha Carteira' />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href='#'>
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>

        <S.MenuItemLink href='#'>
          <MdArrowUpward />
          Entrada
        </S.MenuItemLink>

        <S.MenuItemLink href='#'>
          <MdArrowDownward />
          Saída
        </S.MenuItemLink>

        <S.MenuItemLink href='#'>
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  );
};

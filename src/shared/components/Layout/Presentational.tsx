import { Aside } from '../Aside';
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';
import * as S from './styles';
import { LayoutProps } from './types';

export const Presentational = (props: LayoutProps) => {
  const { children } = props;
  return (
    <S.Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </S.Container>
  );
};

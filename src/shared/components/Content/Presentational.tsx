import { ContentProps } from './types';
import * as S from './styles';

export const Presentational = (props: ContentProps) => {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
};

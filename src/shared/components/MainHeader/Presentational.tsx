import { useMemo } from 'react';
import emojis from '../../utils/emojis';
import { Toggle } from '../Toggle';
import * as S from './styles';

export const Presentational = () => {
  const randomEmojis: string = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <S.Container>
      <Toggle />

      <S.Profile>
        <S.Welcome>Olá, {randomEmojis}</S.Welcome>
        <S.UserName>Ian Felix</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

import * as S from './styles';

export const Presentational = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Título</h1>
      </S.TitleContainer>
      <S.Controllers>
        <button>button a</button>
        <button>button b</button>
      </S.Controllers>
    </S.Container>
  );
};

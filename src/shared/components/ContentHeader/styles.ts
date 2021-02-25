import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
export const TitleContainer = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.white};

    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
    }
  }
`;
export const Controllers = styled.div`
  display: flex;
  gap: 20px;
`;

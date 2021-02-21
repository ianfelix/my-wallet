import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding-left: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;
export const LogoImg = styled.img`
  width: 40px;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin: 10px;
`;
export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  margin: 7px;
  color: ${({ theme }) => theme.colors.info};
  text-decoration: none;

  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }

  svg {
    font-size: 18px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 900px;
  margin: 16px 0 8px;
  gap: 12px;
`;

export const SearchInput = styled.input`
  padding: 16px;
  border: 0;

  background: #fafafa;
  border-radius: 8px;

  flex: 1;

  :focus {
    border: 0;
  }
`;

export const SearchIcon = styled.img`

`;

export const SearchButton = styled.button`
  border: 0;
  outline: 0;

  transition: transform ease-in .3s;

  :hover {
    transform: scale(1.05)
  }
`;

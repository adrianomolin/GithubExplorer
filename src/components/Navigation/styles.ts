import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  a {
    text-decoration: none;
    color: #333;

    padding: 8px;

    transition: transform ease-in .2s;
    :hover {
      transform: scale(0.98)
    }
  }

  a:focus {
    border-bottom: 2px solid #333;
  }
`;

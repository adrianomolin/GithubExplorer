import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;

  a {
    text-decoration: none;
    color: #333;

    padding: 8px;
    border-bottom: 2px solid #333;

    transition: transform ease-in .2s;
    :hover {
      transform: scale(1.075)
    }
  }
`;

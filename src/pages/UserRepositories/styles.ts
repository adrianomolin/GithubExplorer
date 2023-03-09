import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1216px;
  flex: 1;
  overflow: auto;

  margin: 0 auto;

  scroll-behavior: smooth;
  scrollbar-gutter: stable;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 50px;
  }
`;

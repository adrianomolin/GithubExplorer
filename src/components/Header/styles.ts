import styled from 'styled-components';

export const Container = styled.header`
  height: 144px;
  width: 1216px;
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LoginButton = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  outline: 0;
  border: 0;

  color: #fafafa;

  background: #333;
  padding: 12px;
  border-radius: 50px;

  transition: transform ease-in .1s;

  :hover {
    box-shadow: 0px 4px 4px rgba(240, 240, 240, 0.6);
    transform: scale(0.9875);
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Logout = styled.button`
  border: 0;
  color: #D73035;

  transition: transform ease-in .1s;
  :hover {
    transform: scale(1.015);
  }
`;

export const LoggedContainer = styled.div`
  display: flex;
  text-align: center;

  strong {
    margin-left: 8px;
  }
`;

export const LoaderContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

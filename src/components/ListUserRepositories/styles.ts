import styled from 'styled-components';

export const RepositoriesContainer = styled.div`
  height: 500px;
  flex: 1;
  width: 100%;
`;

export const RepositoryContainer = styled.div`
  margin: 8px auto;
  height: 148px;
  width: 900px;
  padding: 16px;
  background: #fafafa;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
`;

export const About = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
`;

export const LoaderContainer = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.div`
`;

export const AuthorImg = styled.img`
  border-radius: 100px;
`;

export const Author = styled.div`
  margin-top: 32px;
`;

export const Small = styled.div`
  font-size: 12px;
  text-transform: uppercase
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const Description = styled.div`
  font-weight: 500;
`;

export const LinkToGit = styled.a`

`;

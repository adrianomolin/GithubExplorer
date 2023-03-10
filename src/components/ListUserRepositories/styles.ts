import styled from 'styled-components';

export const RepositoriesContainer = styled.div`
  height: 600px;
  flex: 1;
  width: 900px;
`;

export const RepositoryContainer = styled.div`
  margin: 8px auto;
  height: 150px;
  width: 850px;
  padding: 16px;
  background: #fafafa;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  transition: transform ease-in .2s;
  :hover {
    transform: scale(1.025)
  }
`;

export const About = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
`;

export const LoaderContainer = styled.div`
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

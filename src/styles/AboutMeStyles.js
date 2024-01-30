import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const AboutGrid = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin-top: 2rem;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  order: 2;

  @media ${(props) => props.theme.breakpoints.md} {
    order: 1;
  }
`;

export const ImageContainer = styled.div`
  order: 1;
  display: flex;
  justify-content: center;

  // @media ${(props) => props.theme.breakpoints.md} {
  //   order: 2;
  //   justify-content: center;
  // }
`;

export const ProfileImage = styled.img`
  width: 95%;
  height: 60%;
  border-radius: 50%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 60%;
    height: 60%;
    border-radius: 50%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60%;
    height: 60%;
    border-radius: 50%;
  }
`;

export const AboutText = styled.p`
  max-width: 650px;
  font-size: 18px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 420px;
    font-size: 16px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const ListAbout = styled.p`
  font-weight: 800;
`;

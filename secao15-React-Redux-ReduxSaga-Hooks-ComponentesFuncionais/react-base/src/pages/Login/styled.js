import styled from 'styled-components';

export const Title2 = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
`;

// small filho de h1
export const Title = styled.h1`
  background-color: green;

  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  color: blue;
`;

import styled from 'styled-components';
import { DefaultThemes, Colors } from '../../styles/default.styles';

export const Title = styled.h1`
  text-align: center;
  color: ${Colors.main};
  font-size: ${DefaultThemes.fontSizes.xl};
  font-family: ${DefaultThemes.fonts.main};
`;

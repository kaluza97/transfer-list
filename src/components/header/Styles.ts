import styled from 'styled-components';
import { Colors } from '../../styles/default.styles';

export const Title = styled.h1`
    text-align: center;
    color: ${Colors.main};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.fonts.main};
`;

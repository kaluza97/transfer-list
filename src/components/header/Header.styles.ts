import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.colors.main};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.fonts.main};
`;

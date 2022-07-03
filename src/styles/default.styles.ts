import { DefaultTheme } from 'styled-components';
import { ColorsInterface } from './default.styles.types';

export const defaultStyles: DefaultTheme = {
    borderRadius: '5rem',
    fonts: {
        main: 'Roboto',
        secondary: 'sans-serif',
    },
    fontSizes: {
        small: '14px',
        medium: '16px',
        large: '18px',
    },
};

export const Colors: ColorsInterface = {
    main: 'cyan',
    secondary: 'magenta',
    white: 'white',
    black: 'black',
};

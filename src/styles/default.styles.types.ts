import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        fonts: {
            main: string;
            secondary: string;
        };
        fontSizes: {
            small: string;
            medium: string;
            large: string;
        };
    }
}

export interface ColorsInterface {
    main: string;
    secondary: string;
    white: string;
    black: string;
}

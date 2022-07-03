import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            main: string;
            secondary: string;
        };
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

import "styled-components/native";
import theme from "@theme/index";


declare module 'styled-components'{
    type ThemeType = typeof theme;

    export interface DefautTheme extends ThemeType{}
}
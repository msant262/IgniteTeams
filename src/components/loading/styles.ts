import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
    `;

    export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
        size: "large",
        color: theme.COLORS.GREEN_700,
    }))``;
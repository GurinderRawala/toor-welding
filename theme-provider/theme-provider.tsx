
import { createTheme, GlobalStyles, GlobalStylesProps, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

const theme = createTheme({
    typography: {
        fontFamily: "'PT Sans Caption', 'sans-serif'",
    },
    palette: {
        background: {
            default: "#fff5e6",
            paper: "#fff"
        },
        primary: {
            main: "#AF524B"
        },
        secondary: {
            main: "#333"
        },
        text:{
            disabled: "#777",
            primary: "#333",
            secondary: "#FFF"
        },
    },
});

export interface AppThemeProviderProps{
    children: JSX.Element
}

const globalStyles: GlobalStylesProps["styles"] = {
    html: {
        fontFamily: "'PT Sans Caption', 'sans-serif'"
    },
    body: {
        boxSizing: "border-box",
        margin: 0,
        padding: 0
    }
}

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyles} />
        { children }
    </ThemeProvider>
)
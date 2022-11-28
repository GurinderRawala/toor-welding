
import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

const theme = createTheme({
    typography: {
        fontFamily: "Nunito, Roboto, Arial",
    },
    palette: {
        background: {
            default: "#f5f5f5",
            paper: "#fff"
        },
        primary: {
            main: "#87CEFA"
        },
        secondary: {
            main: "#2E8B57"
        },
        text:{
            disabled: "#777",
            primary: "#333",
            secondary: "#FFF"
        }
    },
});

export interface AppThemeProviderProps{
    children: JSX.Element
}

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles styles={{
            html: {
                fontFamily: "Nunito, Roboto, Arial",
            },
            body: {
                boxSizing: "border-box",
                margin: 0,
                padding: 0
            }
        }} />
        { children }
    </ThemeProvider>
)
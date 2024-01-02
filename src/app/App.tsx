import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Header } from "widgets/header";

import { Main } from "pages/main";

import "./index.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#469369",
        },
        secondary: {
            main: "#4f4e4e",
        },
    },
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Main />
        </ThemeProvider>
    );
};

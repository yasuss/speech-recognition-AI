import React from "react";
import "./index.css";
import { Header } from "widgets/header";
import { Main } from "pages/main";

export const App = () => {
    return (
        <div>
            <Header />

            <Main />
        </div>
    );
};

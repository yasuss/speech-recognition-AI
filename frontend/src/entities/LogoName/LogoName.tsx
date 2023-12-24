import React from "react";
import { Logo } from "shared/ui/logo";
import * as Style from "./style";

export const LogoName = () => {
    return (
        <Style.Container>
            <Logo />
            <h2>Lecture Notes</h2>
        </Style.Container>
    );
};

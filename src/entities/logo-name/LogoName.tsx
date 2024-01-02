import React from "react";

import { Logo } from "shared/ui/logo";

import * as Styled from "./LogoName.styles";

export const LogoName = () => {
    return (
        <Styled.Container>
            <Logo />
            <h2>Lecture Notes</h2>
        </Styled.Container>
    );
};

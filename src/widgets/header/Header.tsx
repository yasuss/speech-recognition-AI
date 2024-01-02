import React from "react";

import { LogoName } from "entities/logo-name";

import * as Styled from "./Header.styles";

export const Header = () => {
    return (
        <Styled.Container>
            <LogoName />
        </Styled.Container>
    );
};

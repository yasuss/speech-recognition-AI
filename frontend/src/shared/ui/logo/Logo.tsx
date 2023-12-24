import React from "react";
import { ReactComponent as LogoIcon } from "public/assets/logo.svg";

interface LogoProps {
    size?: "xs" | "s" | "m" | "l" | "xl";
}

enum LogoSize {
    "xs" = 16,
    "s" = 24,
    "m" = 32,
    "l" = 48,
    "xl" = 64,
}

export const Logo: React.FC<LogoProps> = (props) => {
    const { size = "s" } = props;

    return (
        <LogoIcon
            height={`${LogoSize[size]}px`}
            width={`${LogoSize[size]}px`}
        />
    );
};

import React from "react";
import { LinearProgress } from "@mui/material";
import { ProcessingProgressProps } from "shared/types/processing-progress";
import * as Styled from "./ProcessingProgress.styles";

export const ProcessingProgress: React.FC<ProcessingProgressProps> = (
    props,
) => {
    const { text, currentStep, steps } = props;
    const progress = (currentStep / steps) * 100;

    return (
        <Styled.Container>
            <span>{text}</span>
            <LinearProgress variant='determinate' value={progress} />
        </Styled.Container>
    );
};

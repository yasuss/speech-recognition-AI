import React from "react";
import { TranscribeAudioButton } from "features/transcribe-audio-button";
import * as Styled from "./Main.styles";

export const Main = () => {
    return (
        <Styled.Container>
            <TranscribeAudioButton />
        </Styled.Container>
    );
};

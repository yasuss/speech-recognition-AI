import React from "react";
import { AudioConversion } from "widgets/audio-conversion";
import * as Styled from "./Main.styles";

export const Main = () => {
    return (
        <Styled.Container>
            <div>
                You can convert audio files from lectures in this application.
                Just upload audio file and press the button!
            </div>
            <AudioConversion />
        </Styled.Container>
    );
};

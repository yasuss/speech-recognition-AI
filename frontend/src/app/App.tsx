import React from "react";
import "./index.css";
import { LogoName } from "entities/logo-name";
import { UploadAudio } from "features/transcribe-audio-button";

export const App = () => {
    return (
        <div>
            <LogoName />

            <UploadAudio />
        </div>
    );
};

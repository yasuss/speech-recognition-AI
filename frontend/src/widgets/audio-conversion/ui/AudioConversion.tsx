import { Divider, Skeleton } from "@mui/material";
import React, { useState } from "react";
import { ParsedJson } from "features/parsed-json";
import { TranscribeAudioButton } from "features/transcribe-audio-button";
import { UploadButton } from "shared/ui/upload-button";
import * as Styled from "./AudioConversion.styles";

export const AudioConversion = () => {
    const [file, setFile] = useState<File | undefined>();
    const [convertedAudio, setConvertedAudio] = useState<JSON | undefined>();
    const [isLoading, setLoading] = useState(false);

    return (
        <Styled.Container>
            <UploadButton setFile={setFile} />

            {file ? (
                <TranscribeAudioButton
                    file={file}
                    setResult={setConvertedAudio}
                    setLoading={setLoading}
                />
            ) : null}

            <Divider />

            {isLoading ? (
                <Skeleton variant='rounded' height={200} />
            ) : (
                <ParsedJson json={convertedAudio} />
            )}
        </Styled.Container>
    );
};

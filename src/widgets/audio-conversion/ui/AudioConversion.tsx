import React, { useState } from "react";

import { Divider } from "@mui/material";

import { ParsedNotes } from "shared/types/parsed-notes";
import { ProcessingProgressProps } from "shared/types/processing-progress";
import { UploadButton } from "shared/ui/upload-button";

import { ExportNotion } from "features/export-notion";
import { ParsedJson } from "features/parsed-json";
import { ProcessingProgress } from "features/processing-progress";
import { TranscribeAudio } from "features/transcribe-audio";

import * as Styled from "./AudioConversion.styles";

export const AudioConversion = () => {
    const [file, setFile] = useState<File | undefined>();
    const [convertedAudio, setConvertedAudio] = useState<ParsedNotes | null>(
        null,
    );
    const [loadingInfo, setLoadingInfo] =
        useState<ProcessingProgressProps | null>(null);
    const isLoading = !!loadingInfo;

    return (
        <Styled.Container>
            <UploadButton
                setFile={(file) => {
                    setFile(file);
                    setConvertedAudio(null);
                }}
            />

            {file ? (
                <TranscribeAudio
                    file={file}
                    setResult={setConvertedAudio}
                    isLoading={isLoading}
                    setLoading={setLoadingInfo}
                />
            ) : null}

            {convertedAudio ? <ExportNotion notes={convertedAudio} /> : null}

            <Divider />

            {isLoading ? (
                <ProcessingProgress
                    text={loadingInfo?.text}
                    currentStep={loadingInfo?.currentStep}
                    steps={loadingInfo?.steps}
                />
            ) : (
                <ParsedJson notes={convertedAudio} />
            )}
        </Styled.Container>
    );
};

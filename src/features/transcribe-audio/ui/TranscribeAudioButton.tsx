import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";

import { ParsedNotes } from "shared/types/parsed-notes";

import { transcribeAudioToJSON } from "../api/transcribe-audio";

interface TranscribeAudioButtonProps {
    file: File;
    setResult: (notes: ParsedNotes) => void;
    isLoading: boolean;
    setLoading: (state: boolean) => void;
}

export const TranscribeAudio: React.FC<TranscribeAudioButtonProps> = (
    props,
) => {
    const { file, setResult, isLoading, setLoading } = props;

    const handleClick = async () => {
        setLoading(true);
        const result = await transcribeAudioToJSON(file);
        
        setResult(result);
        setLoading(false);
    };

    return (
        <LoadingButton
            loading={isLoading}
            variant='contained'
            onClick={handleClick}>
            Transcribe audio
        </LoadingButton>
    );
};

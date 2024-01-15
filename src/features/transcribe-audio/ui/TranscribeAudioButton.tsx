import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { ParsedNotes } from "shared/types/parsed-notes";
import { ProcessingProgressProps } from "shared/types/processing-progress";
import { transcribeAudioToJSON } from "../api/transcribe-audio";

interface TranscribeAudioButtonProps {
    file: File;
    setResult: (notes: ParsedNotes) => void;
    isLoading: boolean;
    setLoading: (state: ProcessingProgressProps | null) => void;
}

export const TranscribeAudio: React.FC<TranscribeAudioButtonProps> = (
    props,
) => {
    const { file, setResult, isLoading, setLoading } = props;

    const handleClick = async () => {
        const result = await transcribeAudioToJSON(file, setLoading);

        setLoading(null);
        setResult(result);
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

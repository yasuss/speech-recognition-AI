import React from "react";
import { Button } from "@mui/material";
import { transcribeAudioToJSON } from "../api/transcribe-audio";
import { ParsedNotes } from "shared/types/parsed-notes";

interface TranscribeAudioButtonProps {
    file: File;
    setResult: (notes: ParsedNotes) => void;
    setLoading: (state: boolean) => void;
}

export const TranscribeAudio: React.FC<TranscribeAudioButtonProps> = (
    props,
) => {
    const { file, setResult, setLoading } = props;

    const handleClick = async () => {
        setLoading(true);
        const result = await transcribeAudioToJSON(file);

        setResult(result);
        setLoading(false);
    };

    return (
        <Button variant='contained' onClick={handleClick}>
            Transcribe audio
        </Button>
    );
};

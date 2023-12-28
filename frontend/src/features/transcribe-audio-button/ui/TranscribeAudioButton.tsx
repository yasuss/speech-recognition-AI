import React from "react";
import { Button } from "@mui/material";
import { transcribeAudioToJSON } from "../api/transcribe-audio";

interface TranscribeAudioButtonProps {
    file: File;
    setResult: (json: JSON) => void;
    setLoading: (state: boolean) => void;
}

export const TranscribeAudioButton: React.FC<TranscribeAudioButtonProps> = (
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

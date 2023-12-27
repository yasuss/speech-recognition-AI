import React, { ChangeEvent, useState } from "react";
import { Divider, Input, Skeleton } from "@mui/material";
import { transcribeAudioToJSON } from "../api";
import * as Styled from "./styles";

export const TranscribeAudioButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [audioJSON, setAudioJSON] = useState();

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e?.target?.files?.[0];

        if (!newFile) {
            console.log("Something wrong with file");
        }

        setIsLoading(true);
        const result = await transcribeAudioToJSON(newFile);
        setAudioJSON(result);
        setIsLoading(false);
    };

    return (
        <Styled.Container>
            <Input type='file' onChange={handleChange} />
            <Divider />
            {isLoading ? <Skeleton variant='rounded' height={100} /> : null}
            {audioJSON ? <div>{JSON.stringify(audioJSON)}</div> : null}
        </Styled.Container>
    );
};

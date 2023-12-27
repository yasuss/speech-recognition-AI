import React, { ChangeEvent, useState } from "react";
import { Input } from "@mui/material";
import { transcribeAudioToJSON } from "../api";

export const UploadAudio = () => {
    const [audioJSON, setAudioJSON] = useState();

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e?.target?.files?.[0];

        if (!newFile) {
            console.log("Something wrong with file");
        }

        const result = await transcribeAudioToJSON(newFile);
        setAudioJSON(result);
    };

    return (
        <div>
            <Input type='file' onChange={handleChange} />
            {audioJSON ? <div>{JSON.stringify(audioJSON)}</div> : null}
        </div>
    );
};

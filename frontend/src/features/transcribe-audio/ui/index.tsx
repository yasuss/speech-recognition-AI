import React from "react";
import { Input } from "@mui/material";
import { fetchAudio } from "../api";

export const UploadAudio = () => {
    const handleChange = (e) => {
        const newFile = e?.target?.files?.[0];

        if (newFile) {
            fetchAudio(newFile);
        }
    };

    return (
        <div>
            <Input type='file' onChange={handleChange} />
        </div>
    );
};

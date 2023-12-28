import { Input } from "@mui/material";
import React from "react";

interface UploadButtonProps {
    setFile: (file: File) => void;
}

export const UploadButton: React.FC<UploadButtonProps> = (props) => {
    const { setFile } = props;
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = e?.target?.files?.[0];

        if (!newFile) {
            console.log("Something wrong with file");
            return;
        }

        setFile(newFile);
    };

    return <Input type='file' onChange={handleChange} />;
};

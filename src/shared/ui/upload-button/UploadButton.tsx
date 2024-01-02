import React, { useState } from "react";

import { Button } from "@mui/material";

import * as Styled from "./UploadButton.styles";

interface UploadButtonProps {
    setFile: (file: File) => void;
}

export const UploadButton: React.FC<UploadButtonProps> = (props) => {
    const { setFile } = props;

    const [fileName, setFileName] = useState<string | undefined>();

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = e?.target?.files?.[0];

        if (!newFile) {
            console.log("Something wrong with file");
            return;
        }

        setFileName(newFile.name);
        setFile(newFile);
    };

    return (
        <Styled.Container>
            <Button variant='contained' component='label'>
                Choose file
                <input hidden type='file' onChange={handleChange} />
            </Button>

            <span>{fileName ? fileName : "No file chosen"}</span>
        </Styled.Container>
    );
};

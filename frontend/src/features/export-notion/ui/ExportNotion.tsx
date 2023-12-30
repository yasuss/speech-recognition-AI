import React from "react";
import { Button } from "@mui/material";
import { ParsedNotes } from "shared/types/parsed-notes";
import { createPage } from "../api/create-page";

interface ExportNotionProps {
    notes: ParsedNotes;
}

export const ExportNotion: React.FC<ExportNotionProps> = (props) => {
    const { notes } = props;

    const handleClick = () => {
        createPage(notes);
    };

    return <Button onClick={handleClick}>Export to notion</Button>;
};

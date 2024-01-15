import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbarContext } from "shared/store/snackbar";
import { ParsedNotes } from "shared/types/parsed-notes";
import { createPage } from "../api/create-page";

interface ExportNotionProps {
    notes: ParsedNotes;
}

export const ExportNotion: React.FC<ExportNotionProps> = (props) => {
    const { notes } = props;

    const [isLoading, setLoading] = useState(false);
    const { setSnack } = useSnackbarContext();

    const handleClick = async () => {
        setLoading(true);

        createPage(notes)
            .then(() => {
                setSnack({ text: "Exported successfully" });
            })
            .catch(() => {
                setSnack({ text: "Exporting error" });
            })
            .finally(() => setLoading(false));
    };

    return (
        <LoadingButton loading={isLoading} onClick={handleClick}>
            Export to notion
        </LoadingButton>
    );
};

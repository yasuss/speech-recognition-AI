import React, { createContext, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";

type ISnack = {
    text: string;
    timeout?: number;
};

interface ISnackbarContext {
    setSnack: (snack: ISnack) => void;
    snack: ISnack | null;
}

interface SnackbarContextProviderProps {
    children?: React.ReactNode;
}

const initialContext: ISnackbarContext = {
    setSnack: () => {},
    snack: null,
};

const SnackbarContext = createContext(initialContext);

export const useSnackbarContext = (): ISnackbarContext => {
    return useContext(SnackbarContext);
};

export const SnackbarContextProvider: React.FC<
    SnackbarContextProviderProps
> = ({ children }) => {
    const [snack, setSnack] = useState<ISnack | null>(null);

    const contexValue = {
        snack,
        setSnack,
    };

    return (
        <SnackbarContext.Provider value={contexValue}>
            {children}

            <Snackbar
                open={Boolean(snack && snack.text)}
                autoHideDuration={2000}
                onClose={() => setSnack(null)}
                message={snack?.text}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            />
        </SnackbarContext.Provider>
    );
};

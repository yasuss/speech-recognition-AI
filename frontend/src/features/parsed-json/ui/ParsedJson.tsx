import React from "react";

interface ParseJsonProps {
    json?: JSON;
}

export const ParsedJson: React.FC<ParseJsonProps> = (props) => {
    const { json } = props;

    if (!json) return;

    return <div>{JSON.stringify(json)}</div>;
};

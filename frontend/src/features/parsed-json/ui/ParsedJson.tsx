import React from "react";
import { ParsedNotes } from "shared/types/parsed-notes";

interface ParsedJsonProps {
    json: ParsedNotes;
}

export const ParsedJson: React.FC<ParsedJsonProps> = (props) => {
    const { json } = props;

    if (!json) return;

    return (
        <div>
            {json?.notes?.map((el) => {
                return (
                    <div>
                        <h3>{el.headline}</h3>

                        {el.paragraphs.map((paragraph) => (
                            <p>{paragraph}</p>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

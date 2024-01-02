import React from "react";

import { ParsedNotes } from "shared/types/parsed-notes";

interface ParsedJsonProps {
    notes?: ParsedNotes;
}

export const ParsedJson: React.FC<ParsedJsonProps> = (props) => {
    const { notes } = props;

    if (!notes) return;

    return (
        <div>
            {notes?.notes?.map((el) => {
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

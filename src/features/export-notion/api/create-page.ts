import axios from "axios";

import { ParsedNotes } from "shared/types/parsed-notes";

const parseNotesToNotion = (notes: ParsedNotes) => {
    const notionDatabase = process?.env?.["NOTION_DATABASE_ID"];

    const result = {
        parent: {
            type: "page_id",
            page_id: notionDatabase,
        },
        properties: {},
        children: [],
    };

    notes.notes.map((note) => {
        const { headline, paragraphs } = note;

        result.children.push({
            object: "block",
            type: "heading_2",
            heading_2: {
                rich_text: [{ type: "text", text: { content: headline } }],
            },
        });

        paragraphs.map((paragraph) => {
            result.children.push({
                object: "block",
                type: "paragraph",
                paragraph: {
                    rich_text: [{ type: "text", text: { content: paragraph } }],
                },
            });
        });
    });

    return result;
};

export const createPage = async (notes: ParsedNotes) => {
    const notionApiKey = process?.env?.["NOTION_API_KEY"];

    const notionNotes = parseNotesToNotion(notes);

    return axios.post("/notion/v1/pages", notionNotes, {
        headers: {
            Authorization: `Bearer ${notionApiKey}`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28",
        },
    });
};

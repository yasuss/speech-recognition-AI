import axios from "axios";

export const createPage = async () => {
    const notionApiKey = process?.env?.["NOTION_API_KEY"];

    return axios.post(
        "https://api.notion.com/v1/pages",
        {},
        {
            headers: {
                Authorization: `Bearer '${notionApiKey}'`,
                "Content-Type: application/json",
                "Notion-Version: 2022-06-28"
            },
        },
    );
};

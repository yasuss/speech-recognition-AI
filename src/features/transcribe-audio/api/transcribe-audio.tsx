import axios from "axios";

const openAiKey = process?.env["OPEN_AI_API_KEY"];

export const fetchAudioOpenAi = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("model", "whisper-1");

    return axios
        .post("https://api.openai.com/v1/audio/transcriptions", formData, {
            headers: {
                "Content-Type": "multipart/format-data",
                Authorization: `Bearer ${openAiKey}`,
            },
        })
        .then((resp) => resp.data?.text ?? null)
        .catch((err) => console.error(err));
};

export const convertText = async (text: string) =>
    axios
        .post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4-1106-preview",
                response_format: { type: "json_object" },
                messages: [
                    {
                        role: "system",
                        content: `Make JSON with array with text by this type: {"notes": [{"headline": "Text headline", "paragraphs": ["Text paragraph"]}, {"headline": "Text headline", "paragraphs": ["Text paragraph"]}]}`,
                    },
                    {
                        role: "user",
                        content: `Summarize this text as very short lecture notes by students with array of headline and paragraphs: 
                    ${text}
                `,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${openAiKey}`,
                },
            },
        )
        .then((resp) =>
            resp.data?.choices?.[0]
                ? JSON.parse(resp.data.choices[0].message.content)
                : null,
        )
        .catch((err) => console.error(err));

export const transcribeAudioToJSON = async (file?: File) => {
    if (!file) return;

    const text = await fetchAudioOpenAi(file);

    if (!text) return;

    const processedText = await convertText(text);

    return processedText;
};

import axios from "axios";

import { ProcessingProgressProps } from "shared/types/processing-progress";

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

export const transcribeAudioToJSON = async (
    file?: File,
    setLoading?: (value: ProcessingProgressProps) => void,
) => {
    const steps = 2;

    if (!file) return;

    setLoading?.({ text: "Converting audio to text", currentStep: 0, steps });
    const text = await fetchAudioOpenAi(file);

    if (!text) return;

    setLoading?.({ text: "Converting text to notes", currentStep: 1, steps });
    const processedText = await convertText(text);

    return processedText;
};

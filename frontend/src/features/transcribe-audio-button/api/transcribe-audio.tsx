import axios from "axios";

export const fetchAudioDeepgram = async (file: File) => {
    const deepgramKey = process?.env["DEEPGRAM_SECRET"];
    const formData = new FormData();
    formData.append("file", file);

    axios
        .post(
            "https://api.deepgram.com/v1/listen?filler_words=false&summarize=v2",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Token ${deepgramKey}`,
                },
                params: {
                    smart_format: "true",
                    model: "nova-2",
                    language: "en-US",
                },
            },
        )
        .then((response) => {
            console.log("response", response);
        })
        .catch((err) => console.error("err", err));
};

export const fetchAudioOpenAi = async (file: File) => {
    const openAiKey = process?.env["OPEN_AI_SECRET"];
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

export const convertText = async (text: string) => {
    const openAiKey = process?.env["OPEN_AI_SECRET"];

    return axios
        .post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4-1106-preview",
                response_format: { type: "json_object" },
                messages: [
                    {
                        role: "system",
                        content: `Make JSON object with text by this type: [{"headline": "Text headline", "paragraphs": ["Text paragraph"]}]`,
                    },
                    {
                        role: "user",
                        content: `Summarize this text as very short lecture notes by students with headline: 
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
};

export const transcribeAudioToJSON = async (file?: File) => {
    if (!file) return;

    const text = await fetchAudioOpenAi(file);

    if (!text) return;

    const processedText = await convertText(text);

    return processedText;
};

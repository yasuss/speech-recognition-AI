import axios from "axios";

export const fetchAudio = async (file: File) => {
    if (!file) return;

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

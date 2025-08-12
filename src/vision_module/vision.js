const endpoint = process.env.REACT_APP_VISION_ENDPOINT;
const key = process.env.REACT_APP_VISION_KEY;

export async function analyzeDirect(imageUrl) {
    if (!endpoint || !key) {
        throw new Error("Vision endpoint and key must be configured");
    }

    const params = new URLSearchParams({
        "api-version": "2024-02-01",
        features: "tags"
    });
    const url = `${endpoint}/computervision/imageanalysis:analyze?${params.toString()}`;

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: imageUrl })
    });
    if (!res.ok) throw new Error(`CV failed: ${res.status}`);
    return res.json();
}

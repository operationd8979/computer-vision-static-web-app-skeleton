import React from 'react';
import { analyzeDirect } from './vision_module/vision';

function App() {
    const [imageUrl, setImageUrl] = React.useState("");
    const [result, setResult] = React.useState(null);

    const handleAnalyze = async () => {
        try {
            const result = await analyzeDirect(imageUrl);
            console.log("Analysis result:", result);
            setResult(result);
        } catch (error) {
            console.error("Error analyzing image:", error);
        }
    };

    return <div>
        <h1>Welcome to the Computer Vision App</h1>
        <p>This app uses advanced computer vision techniques to analyze images.</p>
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" style={{ width: "100%", padding: "12px 20px", margin: "8px 0", boxSizing: "border-box" }} placeholder="Enter image URL or Prompt content to generate image" />
        <br />
        <button style={{ padding: "12px 20px", margin: "8px 0", cursor: "pointer" }} onClick={handleAnalyze}>Analyze Image / Generate Image</button>
        <div>
            {result && (
                <div>
                    <h2>Analysis Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    </div>;
}

export default App;

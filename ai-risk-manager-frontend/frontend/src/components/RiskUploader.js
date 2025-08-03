import React, { useState } from "react";
import axios from "axios";

function RiskUploader() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/api/risk/upload", formData);
      setResponse(res.data.risk_score);
    } catch (err) {
      console.error(err);
      setResponse("Upload failed.");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-md">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload & Analyze
      </button>
      {response && <div className="mt-4 text-lg font-semibold">Result: {response}</div>}
    </div>
  );
}

export default RiskUploader;

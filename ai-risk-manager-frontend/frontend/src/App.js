import React from "react";
import RiskUploader from "./components/RiskUploader";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">AI Risk Manager</h1>
      <RiskUploader />
    </div>
  );
}

export default App;

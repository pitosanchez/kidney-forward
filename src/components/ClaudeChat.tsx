import React, { useState } from "react";
import { useClaude } from "../hooks/useClaude";
import Button from "./ui/Button";

const ClaudeChat: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const { askClaude, loading, error } = useClaude();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      const result = await askClaude(
        prompt,
        "You are a helpful AI assistant for Kidney Forward. Provide informative and compassionate responses about kidney donation, transplantation, and supporting patients in need."
      );
      setResponse(result);
    } catch (err) {
      console.error("Error asking Claude:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        Ask Claude About Kidney Donation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium mb-2">
            Your Question
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="input-field"
            rows={4}
            placeholder="Ask about kidney donation, transplantation, or how to help patients in need..."
            disabled={loading}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          disabled={loading || !prompt.trim()}
        >
          {loading ? "Asking Claude..." : "Ask Claude"}
        </Button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">Error: {error}</p>
        </div>
      )}

      {response && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="font-semibold mb-2">Claude's Response:</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default ClaudeChat;

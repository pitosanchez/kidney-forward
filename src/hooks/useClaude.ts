import { useState } from "react";

interface ClaudeResponse {
  success: boolean;
  response?: string;
  error?: string;
}

export const useClaude = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const askClaude = async (
    prompt: string,
    systemPrompt?: string
  ): Promise<string> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/claude", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add your Auth0/JWT token here
        },
        body: JSON.stringify({ prompt, systemPrompt }),
      });

      const data: ClaudeResponse = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to get response");
      }

      return data.response || "";
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { askClaude, loading, error };
};

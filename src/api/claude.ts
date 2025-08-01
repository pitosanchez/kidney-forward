import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export interface ClaudeRequest {
  prompt: string;
  systemPrompt?: string;
}

export interface ClaudeResponse {
  success: boolean;
  response?: string;
  error?: string;
}

export const handleClaudeRequest = async (
  request: ClaudeRequest
): Promise<ClaudeResponse> => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return {
        success: false,
        error: "Anthropic API key not configured",
      };
    }

    const message = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system:
        request.systemPrompt ||
        "You are a helpful AI assistant for Kidney Forward, an organization dedicated to connecting kidney donors with patients in need. Be compassionate, informative, and supportive in your responses.",
      messages: [
        {
          role: "user",
          content: request.prompt,
        },
      ],
    });

    // Handle different content block types
    const content = message.content[0];
    if (content.type === "text") {
      return {
        success: true,
        response: content.text,
      };
    } else {
      return {
        success: false,
        error: "Unexpected content type received",
      };
    }
  } catch (error) {
    console.error("Claude API error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

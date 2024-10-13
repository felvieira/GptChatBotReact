import { systemMessage } from '@/utils/chatTraining'

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function processMessageToChatGPT(chatMessages) {
  let apiMessages = chatMessages.map((messageObject) => ({
    role: messageObject.role === 'user' ? "user" : "assistant",
    content: messageObject.content
  }));

  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      systemMessage,
      ...apiMessages
    ]
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    });
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
}

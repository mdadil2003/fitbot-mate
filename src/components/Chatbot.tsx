import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { useToast } from "@/hooks/use-toast";

interface Message {
  text: string;
  isAi: boolean;
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm your AI fitness trainer. What's your fitness goal?", isAi: true },
  ]);
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { text: userMessage, isAi: false }]);

    // Simulate AI response (replace with actual AI integration later)
    setTimeout(() => {
      const response = getSimpleResponse(userMessage);
      setMessages((prev) => [...prev, { text: response, isAi: true }]);
    }, 1000);
  };

  const getSimpleResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("weight loss") || lowerMessage.includes("lose weight")) {
      return "For weight loss, I recommend a combination of cardio exercises and strength training. Would you like a specific workout plan?";
    }
    if (lowerMessage.includes("muscle") || lowerMessage.includes("strength")) {
      return "Building muscle requires consistent strength training and proper nutrition. Shall we discuss a beginner-friendly routine?";
    }
    return "That's a great goal! Would you like to know more about specific exercises or nutrition advice?";
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-primary to-secondary">
        <h2 className="text-white text-xl font-bold">AI Fitness Trainer</h2>
      </div>
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isAi={message.isAi} />
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};
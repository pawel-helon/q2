"use client";

import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";
import { Heading } from "@/components/typography";
import { Avatar } from "@/components/ui/avatar";

export const Assistant = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [isChat, setIsChat] = useState(false);

  const handleIsChat = () => {
    setIsChat(!isChat);
  };

  if (!isChat) {
    return (
      <Button
        onClick={handleIsChat}
        className="absolute bottom-4 right-4"
        size="icon"
      >
        <MessageCircle className="text-white" />
      </Button>
    );
  }

  return (
    <motion.div
      animate={{ width: isChat ? 380 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "h-full border-border/80 p-4 flex flex-col justify-between",
        isChat ? "w-[440px] border-r-2 border-border" : "w-0"
      )}
    >
      <div className="w-full flex justify-between items-center">
        <Heading variant="h3">Assistant</Heading>
        <Button onClick={handleIsChat} variant="ghost" size="icon">
          <X />
        </Button>
      </div>
      <div className="flex flex-col flex-start w-full mt-10 gap-4 h-full">
        {messages.map((m) => (
          <div key={m.id} className="flex gap-2">
            {m.role === "user" ? (
              <Avatar>
                <AvatarImage src="/user.png" alt="user" />
                <AvatarFallback className="size-16 bg-border flex items-center justify-center">
                  JD
                </AvatarFallback>
              </Avatar>
            ) : (
              <Avatar>
                <AvatarImage src="/assistant.png" alt="assistant" />
                <AvatarFallback>BT</AvatarFallback>
              </Avatar>
            )}
            <div className="flex p-2.5 w-full rounded-sm bg-border/60">
              <p className="text-sm font-extralight">{m.content}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mb-1">
        <Input
          value={input}
          placeholder="Ask me anything..."
          onChange={handleInputChange}
        />
      </form>
    </motion.div>
  );
};

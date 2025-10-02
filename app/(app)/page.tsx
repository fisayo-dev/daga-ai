"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Paperclip } from "lucide-react";
import { useState } from "react";
import ChatHeader from "@/components/ChatHeader";

interface LLMOption {
  value: string;
  label: string;
  icon: string; // Emoji or icon component
}

const LLMOptions: LLMOption[] = [
  { value: "google", label: "Google", icon: "🔍" },
  { value: "gemini", label: "Gemini", icon: "💎" },
  { value: "grok", label: "Grok", icon: "🚀" },
  { value: "claude", label: "Claude", icon: "🤖" },
];


export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  return (
   <div className="p-2 md:p-6">
    <div className="app-container grid gap-4">
     <ChatHeader />
      <div className="grid gap-6 h-[80vh] place-content-center">
        {/* Response of element */}
        <h2 className="text-5xl xl:text-4xl text-center font-medium">Welcome There!</h2>
        <div className="w-full md:w-2xl rounded-xl p-3 border border-primary dark:border-primary/50 bg-background/95 backdrop-blur-xl shadow-lg">
          <div className="grid gap-1">
            <Textarea 
              placeholder="Ask Daga anything" 
              className="min-h-[40px] shadow-none border-none text-left w-full text-secondary-foreground/85 resize-none" 
            />
            <div className="flex items-center justify-between">
              <button className="text-sm rounded-xl px-3 py-2 bg-foreground/10 text-foreground/70 dark:text-foreground/60 hover:bg-foreground/15 hover:text-foreground dark:hover:text-foreground/90 flex items-center gap-2 transition-colors cursor-pointer">
                <Paperclip className="h-4 w-4"/>
                <span>Attach image(s)</span>
              </button>  
              <div className="flex items-center gap-2">
                <Select value={selectedValue} onValueChange={(value) => {
                  setSelectedValue(value);
                }}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Select an LLM" />
                  </SelectTrigger>
                  <SelectContent>
                    {LLMOptions.map((option) => (
                      <SelectItem className="hover:bg-primary/40 text-foreground" key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button>
                  <ArrowUp className="h-4 w-4"/>
                </Button>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

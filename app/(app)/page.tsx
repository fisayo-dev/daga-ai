import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Paperclip } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
   <div className="p-6">
    <div className="app-container grid gap-4">
      <div className="flex justify-between items-center w-full">
        <span>Explain Quantum Computing</span>
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button>Signup / Login</Button>
          </Link>
        </div>
      </div>
      <div className="grid gap-6 h-[80vh] place-content-center">
        {/* Response of element */}
        <h2 className="text-5xl xl:text-4xl text-center font-medium">Welcome There!</h2>
        <div className="w-2xl rounded-xl p-3 border border-primary dark:border-primary/50 bg-background/95 backdrop-blur-xl shadow-lg">
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
              <Button>
                <ArrowUp className="h-4 w-4"/>
              </Button>  
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

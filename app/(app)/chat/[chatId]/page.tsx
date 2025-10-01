import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Paperclip } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="flex justify-between items-center w-full py-4 px-4 md:px-6">
          <span>Explain Quantum Computing</span>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button>Signup / Login</Button>
            </Link>
          </div>
        </div>
        {/* Chat section */}
        <div className="custom-scrollbar flex-1 overflow-y-auto bg-transparent px-6 md:px-0 py-3 space-y-6">
          {/* Chat Messages */}
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">What is quantum computing?</p>
              </div>
            </div>

            {/* Assistant Message */}
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-sm leading-relaxed">Quantum computing is a type of computation that harnesses quantum mechanical phenomena like superposition and entanglement. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously.</p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">Can you explain superposition in simple terms?</p>
              </div>
            </div>

            {/* Assistant Message */}
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-sm leading-relaxed">Think of a coin spinning in the air. While it&apos;s spinning, it&apos;s neither heads nor tails—it&apos;s both at once. That&apos;s similar to superposition in quantum computing. A qubit can be in a state of 0, 1, or both simultaneously until we measure it. This allows quantum computers to process multiple possibilities at the same time.</p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">What are some practical applications?</p>
              </div>
            </div>

            {/* Assistant Message */}
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-sm leading-relaxed">Quantum computers show promise in several areas: drug discovery and molecular modeling, cryptography and security, financial modeling and optimization, artificial intelligence and machine learning, and climate modeling. They excel at solving complex optimization problems that would take classical computers thousands of years.</p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">How far are we from having quantum computers in our homes?</p>
              </div>
            </div>

            {/* Assistant Message */}
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-sm leading-relaxed">We&apos;re quite far from that reality. Current quantum computers require extreme conditions—temperatures near absolute zero, isolated environments, and expert maintenance. They&apos;re also specialized for specific problems, not general-purpose computing. For the foreseeable future, quantum computers will likely remain in research labs and data centers, accessible via cloud services.</p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm">What&apos;s the biggest challenge in quantum computing right now?</p>
              </div>
            </div>

            {/* Assistant Message */}
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-sm leading-relaxed">The biggest challenge is quantum decoherence—the loss of quantum information due to environmental interference. Qubits are incredibly fragile and maintaining their quantum state long enough to perform calculations is difficult. This is why quantum computers need such extreme isolation and cooling. Researchers are working on error correction techniques and more stable qubit designs.</p>
              </div>
            </div>

          </div>
        </div>
        {/* Input area */}
        <div className="px-4 md:px-6 pb-6 bg-transparent">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl p-3 border border-primary dark:border-primary/50 bg-background/95 backdrop-blur-xl shadow-lg">
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
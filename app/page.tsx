import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <div className="p-6">
    <div className="flex justify-between items-center w-full">
      <span>Explain Quantum Computing</span>
      <div className="flex items-center gap-2">
        <Button>Login</Button>
        <Button variant="outline">Signup</Button>
      </div>
    </div>
   </div>
  );
}

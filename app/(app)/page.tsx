import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
   <div className="p-6">
    <div className="flex justify-between items-center w-full">
      <span>Explain Quantum Computing</span>
      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button>Signup / Login</Button>
        </Link>
      </div>
    </div>
   </div>
  );
}

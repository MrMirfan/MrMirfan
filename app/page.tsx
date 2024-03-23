import Image from "next/image";
import { Profile } from "./profile";
import Blog from "./blog";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto my-4">
        
        <div className="flex flex-col md:flex-row gap-5">

          <Blog />

          <Profile />

        </div>
        
      </div>
    </main>
  );
}

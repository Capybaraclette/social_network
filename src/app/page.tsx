import Image from "next/image";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";


export default function Home() {
  return (
      <div className={"m-4"}>
        <h1>Home page content</h1>
      </div>

  );
}

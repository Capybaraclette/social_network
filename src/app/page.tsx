import Image from "next/image";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeToggle";

export default function Home() {
  return (
      <div className={"m-4"}>
          <SignedOut>
              <SignInButton mode={"modal"} >
                <Button>
                    Sign in
                </Button>
              </SignInButton >
          </SignedOut>
    <ModeToggle></ModeToggle>
          <SignedIn>
              <UserButton />
          </SignedIn>
      </div>

  );
}

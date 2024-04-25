import { SignInButton, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </main>
  );
}

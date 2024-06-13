import Link from "next/link";
import { Container } from "lucide-react";

import { SignIn } from "./_components/sign-in";
import { SignUp } from "./_components/sign-up";

export default function HomePage() {
  return (
    <div className="flex w-full py-6 justify-between items-center px-3 xs:px-4">
      <Link href="/">
        <Container />
      </Link>
      <div className="flex gap-1 xs:gap-2">
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
}

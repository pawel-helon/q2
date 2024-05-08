import Link from "next/link";
import { SignIn } from "./sign-in";
import { SignUp } from "./sign-up";
import { Container } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full py-6 px-4 flex justify-between items-center">
      <Link href="/">
        <Container />
      </Link>
      <div className="flex gap-2">
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
};

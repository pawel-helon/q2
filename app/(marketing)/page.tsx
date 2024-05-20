import { Navbar } from "@/components/navbar";
import { SignIn } from "./_components/sign-in";
import { SignUp } from "./_components/sign-up";

export default function HomePage() {
  return (
    <div className="px-4">
      <Navbar>
        <SignUp />
        <SignIn />
      </Navbar>
    </div>
  );
}

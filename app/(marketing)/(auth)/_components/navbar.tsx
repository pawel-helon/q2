import { Container } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full py-6 px-4 flex gap-2 justify-start items-center">
      <Link href="/">
        <Container />
      </Link>
    </div>
  );
};

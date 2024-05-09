import { Navbar } from "@/components/navbar"
import { SignIn } from "./_components/sign-in"
import { SignUp } from "./_components/sign-up"

const HomePage = () => {
  return (
    <div className="px-4">
      <Navbar>
        <SignUp />
        <SignIn />
      </Navbar>
    </div>
  )
}

export default HomePage
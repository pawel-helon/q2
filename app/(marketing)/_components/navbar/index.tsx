import { SignInForm } from './sign-in-form'
import { Signup } from './sign-up'

export const Navbar = () => {
  return (
    <div className="w-full py-6 px-4 flex gap-2 justify-end items-center">
    <Signup />
    <SignInForm />
</div>
  )
}

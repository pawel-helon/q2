import { SignUpForm } from './sign-up-form'
import { SignInForm } from './sign-in-form'

export const Navbar = () => {
  return (
    <div className="w-full py-6 px-4 flex gap-2 justify-end items-center">
    <SignUpForm />
    <SignInForm />
</div>
  )
}

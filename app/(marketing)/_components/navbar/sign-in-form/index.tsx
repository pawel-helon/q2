"use client";

import { useFormState } from "react-dom";

import { signin } from "@/app/actions/auth/sign-in";
import { SignInButton } from "./sign-in-button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function SignInForm() {
  const [state, action] = useFormState(signin, undefined);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form action={action}>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="Email" />
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
          <SignInButton />
        </form>
      </DialogContent>
    </Dialog>
  );
}

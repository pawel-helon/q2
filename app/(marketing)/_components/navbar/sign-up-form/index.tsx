"use client";

import { useFormState } from "react-dom";

import { signup } from "@/app/actions/auth/sign-up";
import { SignUpButton } from "./sign-up-button";
import { Dialog, DialogContent, DialogTrigger } from  "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function SignUpForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost"> Sign up</Button>
      </DialogTrigger>
      <DialogContent>
        <form action={action}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Name" />
          </div>
          {state?.errors?.name && <p>{state.errors.name}</p>}

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
          <SignUpButton />
        </form>
      </DialogContent>
    </Dialog>
  );
}

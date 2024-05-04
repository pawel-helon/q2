//temp

"use client";

import Link from "next/link";
import { Container } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { signup } from "@/app/actions/auth/sign-up";
import { FormField } from "../../../../components/form/form-field";
import { Card } from "@/components/ui/card";

const SignInPage = () => {
  const [state, action] = useFormState(signup, undefined);

  return (
    <div className="h-screen w-full flex relative justify-center items-center">
      <div className="absolute top-0 left-0 w-full py-6 px-4 flex gap-2 justify-start items-center">
        <Link href="/">
          <Container />
        </Link>
      </div>
      <Card className="max-w-lg p-6">
          <form action={action} className="flex flex-col gap-5">
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Enter full name" />
            </FormField>

            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter email address"
              />
            </FormField>

            <FormField className="mb-6">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
              />
            </FormField>
          </form>
      </Card>
    </div>
  );
};

export default SignInPage;

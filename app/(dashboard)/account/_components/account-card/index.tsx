"use server";

import { fetchUser } from "@/app/actions/fetchUser";

import { ChangeNameField } from "./change-name-field/index.";
import { ChangeEmailField } from "./change-email-field";
import { ChangePasswordField } from "./change-password-field";
import { Heading } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AccountCardProps {
  userId: number;
}

export const AccountCard = async ({ userId }: AccountCardProps) => {
  const user = await fetchUser(userId);

  return (
    <div className="mt-12 border border-border shadow-black shadow-2xl rounded-lg">
      <Card className="flex flex-col col-span-1 bg-transparent border-none">
        <CardHeader className="mb-4 p-4">
          <Heading variant="h3">Account</Heading>
        </CardHeader>
        <CardContent className="grow p-4 flex flex-col gap-6">
          <ChangeNameField
            label="Full name"
            placeholder={user?.name || undefined}
            dialogTitle="Change name"
            userId={userId}
          />
          <ChangeEmailField
            label="Email"
            placeholder={user?.email || undefined}
            dialogTitle="Change email"
            userId={userId}
          />
          <ChangePasswordField
            label="Password"
            placeholder="*******"
            dialogTitle="Change password"
            userId={userId}
          />
        </CardContent>
      </Card>
    </div>
  );
};

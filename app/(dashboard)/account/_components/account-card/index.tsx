"use server"

import { fetchUser } from "@/app/actions/fetchUser";
import { Heading } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Item } from "./item";
import { ChangeEmailForm } from "./change-email-form";
import { ChangeNameForm } from "./change-name-form";
import { ChangePasswordForm } from "./change-pasword-form";

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
          <Item
            label="Full name"
            placeholder={user?.name || undefined}
            dialogTitle="Change name"
          >
            <ChangeNameForm userId={userId} />
          </Item>
          <Item
            label="Email"
            placeholder={user?.email || undefined}
            dialogTitle="Change email"
          >
            <ChangeEmailForm userId={userId} />
          </Item>
          <Item
            label="Password"
            placeholder="*******"
            dialogTitle="Change password"
          >
            <ChangePasswordForm userId={userId} />
          </Item>
        </CardContent>
      </Card>
    </div>
  );
};

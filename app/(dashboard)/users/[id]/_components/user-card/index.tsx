"use server";

import { ChangeEmailField } from "@/app/(dashboard)/account/_components/account-card/change-email-field";
import { ChangeNameField } from "@/app/(dashboard)/account/_components/account-card/change-name-field/index.";
import { Heading } from "@/components/typography";
import { user } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/card";
import { ChangeRoleField } from "./change-role-field";
interface UserCardProps {
  user: user | null;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <Heading variant="h3">{user!.name}</Heading>
      </CardHeader>
      <CardContent>
        <ChangeNameField
          label="Full name"
          placeholder={user?.name || undefined}
          dialogTitle="Change name"
          userId={user!.id}
        />
        <ChangeEmailField
          label="Email"
          placeholder={user?.email || undefined}
          dialogTitle="Change email"
          userId={user!.id}
        />
        <ChangeRoleField
          label="Role"
          placeholder={user?.role || undefined}
          dialogTitle="Request change"
          userId={user!.id}
        />
      </CardContent>
    </Card>
  );
};

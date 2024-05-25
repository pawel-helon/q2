"use server";

import { fetchUser } from "@/app/actions/fetchUser";

import { ChangeNameField } from "./change-name-field/index.";
import { ChangeEmailField } from "./change-email-field";
import { ChangePasswordField } from "./change-password-field";
import { ChangeRoleField } from "./change-role-field";
import { Heading } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/card";
import { ROLE, User } from "@prisma/client";

export async function AccountCard({
  userId,
  role,
}: {
  userId: number;
  role: ROLE;
}) {
  const user = (await fetchUser(userId)) as User;
  const userName = user.name as string;

  return (
    <Card>
      <CardHeader>
        <Heading variant="h3">Account</Heading>
      </CardHeader>
      <CardContent>
        <ChangeNameField
          label="Full name"
          placeholder={userName}
          dialogTitle="Change name"
          userId={userId}
        />
        <ChangeEmailField
          label="Email"
          placeholder={user.email}
          dialogTitle="Change email"
          userId={userId}
        />
        {role !== ROLE.ADMIN && (
          <ChangeRoleField
            label="Role"
            placeholder={user.role}
            dialogTitle="Request role change"
            userId={userId}
          />
        )}
        <ChangePasswordField
          label="Password"
          placeholder="*******"
          dialogTitle="Change password"
          userId={userId}
        />
      </CardContent>
    </Card>
  );
}

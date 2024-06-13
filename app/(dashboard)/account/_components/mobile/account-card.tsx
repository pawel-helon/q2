"use server";

import { readUnique } from "@/lib/data/read";

import { Heading } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/card";

import { ROLE, User } from "@prisma/client";
import { ChangeNameField } from "@/app/(dashboard)/account/_components/account-card/change-name-field";
import { ChangeEmailField } from "@/app/(dashboard)/account/_components/account-card/change-email-field";
import { ChangeRoleField } from "@/app/(dashboard)/account/_components/account-card/change-role-field";
import { ChangePasswordField } from "@/app/(dashboard)/account/_components/account-card/change-password-field";
import { ChangePassword } from "./change-password";

export async function AccountCard({
  userId,
  role,
}: {
  userId: number;
  role: ROLE;
}) {
  const user = (await readUnique(userId, "user")) as User;

  return (
    <div className="border-t my-12 pt-8">
      <Card>
        <CardHeader>
          <Heading variant="h3">Account</Heading>
        </CardHeader>
        <CardContent className="gap-5">
          <ChangeNameField
            label="Full name"
            placeholder={user.name!}
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
          <ChangePassword userId={userId} />
        </CardContent>
      </Card>
    </div>
  );
}

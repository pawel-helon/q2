"use server";

import { ChangeNameField } from "@/app/(dashboard)/account/_components/account-card/change-name-field/index.";
import { ChangeEmailField } from "@/app/(dashboard)/account/_components/account-card/change-email-field";
import { ChangeRoleField } from "./change-role-field";

import { Heading } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/card";
import { User } from "@prisma/client";

export async function UserCard({ user }: { user: User }) {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <Heading variant="h3">{user.name}</Heading>
      </CardHeader>
      <CardContent className="gap-5">
        <ChangeNameField
          label="Full name"
          placeholder={user.name as string}
          dialogTitle="Change name"
          userId={user.id}
        />
        <ChangeEmailField
          label="Email"
          placeholder={user.email}
          dialogTitle="Change email"
          userId={user.id}
        />
        <ChangeRoleField
          label="Role"
          placeholder={user.role}
          dialogTitle="Request change"
          userId={user.id}
        />
      </CardContent>
    </Card>
  );
}

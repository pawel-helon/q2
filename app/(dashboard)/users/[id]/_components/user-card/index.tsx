"use server";

import { Heading } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { user } from "@/types";

interface UserCardProps {
  user: user | null;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="w-full flex col-span-2">
      <div className="h-[240px] w-full border border-border shadow-black shadow-2xl rounded-lg">
        {/* <Card>
          <CardContent> */}
            {/* <CardHeader className="mb-4 p-4"> */}
              <Heading variant="h3">{user!.name}</Heading>
            {/* </CardHeader> */}
          {/* </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

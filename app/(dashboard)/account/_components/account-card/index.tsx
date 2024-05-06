import { fetchUser } from "@/app/actions/fetchUser";
import { Heading } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEmail } from "../../change-email";

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
        <CardContent className="grow mb-4 p-4 flex flex-col gap-3">
          <ul className="flex flex-col">
            <li className="flex flex-col gap-2">
              <Label>Full name</Label>
              <Input disabled placeholder={user?.name || undefined}></Input>
              <div className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link">Change</Button>
                  </DialogTrigger>
                  <DialogContent>temp</DialogContent>
                </Dialog>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input disabled placeholder={user?.email || undefined}></Input>
              <div className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link">Change</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="mb-6">
                      <DialogTitle>Change email</DialogTitle>
                    </DialogHeader>
                    <ChangeEmail userId={userId} />
                  </DialogContent>
                </Dialog>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input disabled type="passowrd" placeholder="*******"></Input>
              <div className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link">Change</Button>
                  </DialogTrigger>
                  <DialogContent>temp</DialogContent>
                </Dialog>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

import { z } from "zod";

import { db } from "@/lib/db";
import { schema } from "@/schemas";
import { RegistrationForm } from "./_components/RegistrationForm";

export default function Home() {
  const onDataAction = async (data: z.infer<typeof schema>) => {
    "use server";
    const parsed = schema.safeParse(data);

    if (parsed.success) {
      await db.user.create({
        data: {
          first: parsed.data.first,
          last: parsed.data.last,
          email: parsed.data.email,
        },
      });
      console.log("User registered");

      return { message: "User registered", user: parsed.data };
    } else {
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };

  return (
    <div className="mx-auto max-w-xl my-8">
      <RegistrationForm onDataAction={onDataAction} />
    </div>
  );
}

"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

import {
  AddDeviceSchemaAdmin,
  AddDeviceSchemaEndUser,
  CreateDeviceFormState,
} from "@/lib/schemas/add-device-schema";
import { SignupFormSchema, CreateUserFormState } from "@/lib/schemas/sign-up";

import { ROLE, STATE, STATUS, User } from "@prisma/client";
import { db } from "@/lib/db";

export async function createUserByAdmin(
  name: string,
  email: string,
  role: ROLE,
  hashedPassword: string
) {
  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      role: role,
      password: hashedPassword,
    },
  });

  if (newUser) {
    return true;
  }
}

export async function createUserByUser(
  state: CreateUserFormState,
  formData: FormData
) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm: formData.get("confirm"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
      role: ROLE.ENDUSER,
    },
  });

  if (!newUser) {
    return {
      message: "An error occurred while creating your account.",
    };
  }
  redirect("/sign-in");
}

export async function createDeviceByAdmin(
  state: CreateDeviceFormState,
  formData: FormData
) {
  const validatedFields = AddDeviceSchemaAdmin.safeParse({
    owner: formData.get("owner"),
    city: formData.get("city"),
    country: formData.get("country"),
    model: formData.get("model"),
    deviceName: formData.get("deviceName"),
    streetAddress: formData.get("streetAddress"),
    SIM: formData.get("SIM"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { owner, city, country, model, deviceName, streetAddress, SIM } =
    validatedFields.data;
  const prefix = formData.get("prefix");
  const phoneNumber = `${prefix}-${SIM}`;

  const newDevice = await db.device.create({
    data: {
      deviceName: deviceName,
      streetAddress: streetAddress,
      city: city,
      country: country,
      model: model,
      SIM: phoneNumber,
      owner: {
        connect: {
          email: owner,
        },
      },
      status: STATUS.INACTIVE,
      state: STATE.CLOSED,
    },
  });

  if (!newDevice) {
    return {
      message: "An error occurred while adding new device.",
    };
  }

  redirect(`/devices/${newDevice.id}`);
}

export async function createDeviceByEndUser(
  state: CreateDeviceFormState,
  formData: FormData
) {
  const validatedFields = AddDeviceSchemaEndUser.safeParse({
    city: formData.get("city"),
    country: formData.get("country"),
    model: formData.get("model"),
    deviceName: formData.get("deviceName"),
    streetAddress: formData.get("streetAddress"),
    SIM: formData.get("SIM"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const userId = Number(formData.get("userId"));

  const { city, country, model, deviceName, streetAddress, SIM } =
    validatedFields.data;
  const prefix = formData.get("prefix");
  const phoneNumber = `${prefix}-${SIM}`;

  const newDevice = await db.device.create({
    data: {
      deviceName: deviceName,
      streetAddress: streetAddress,
      city: city,
      country: country,
      model: model,
      SIM: phoneNumber,
      owner: {
        connect: {
          id: userId,
        },
      },
      status: STATUS.INACTIVE,
      state: STATE.CLOSED,
    },
  });

  if (!newDevice) {
    return {
      message: "An error occurred while adding new device.",
    };
  }

  redirect(`/devices/${newDevice.id}`);
}

export async function createNotificationByEndUser(role: ROLE, userId: number) {
  const admins = (await db.user.findMany({
    where: {
      role: ROLE.ADMIN,
    },
  })) as User[];

  const requester = (await db.user.findUnique({
    where: {
      id: Number(userId),
    },
  })) as User;

  for (const admin of admins) {
    await db.notification.create({
      data: {
        title: `${requester.name} requested role change to ${role}`,
        user: {
          connect: {
            id: admin.id,
          },
        },
        requester: Number(userId),
        requestedRole: role as ROLE,
      },
    });
  }
}

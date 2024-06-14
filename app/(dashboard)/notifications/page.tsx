"use server"

import { verifySession } from "@/lib/data-access-layer";
import { readNotificationsForUser } from "@/lib/data/read";
import { Notification } from "@prisma/client";

export default async function NotificationsPage() {
    const session = await verifySession();

    const userId = Number(session.userId);
    const notifications = await readNotificationsForUser(userId) as Notification[]

    return (
        <div>
            Notifications
        </div>
    )
}
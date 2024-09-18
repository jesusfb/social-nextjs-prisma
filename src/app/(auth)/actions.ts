"use server";
import { lucia, validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export const logout = async (): Promise<{ error: string }> => {
    const { session } = await validateRequest();
    if (!session) {
        throw new Error("Unauthorized.");
    }
    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );

    return redirect("/login");
}

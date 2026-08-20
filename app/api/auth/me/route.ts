import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "not authenticated" },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);

    return NextResponse.json({
      user: {
        id: payload.userId,
        email: payload.email,
      },
    });
  } catch (error) {
    console.error("error:", error);

    return NextResponse.json(
      { message: "not valid or expired token" },
      { status: 401 }
    );
  }
}
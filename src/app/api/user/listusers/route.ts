import AuthService from "@/modules/auth/services/auth-service";
import { ApiResponse } from "@/types/apiResponse.type";
import { JWTPayload } from "jose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session: ApiResponse<JWTPayload | null> =
      await AuthService.sessionUser();

    if (session.error) {
      throw new Error(session.message);
    }

    const sessionPayload: JWTPayload | null = session.data;

    if (!sessionPayload) {
      throw new Error("Nenhuma sessão encontrada");
    }

    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionPayload.token}`
      }
    });

    if (!req.ok) {
      throw new Error("Nenhum usuario encontrado");
    }

    const res = await req.json();

    return NextResponse.json(
      {
        error: false,
        message: "Usuarios encontrados",
        data: res
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, message: error, data: null },
      { status: 500 }
    );
  }
}

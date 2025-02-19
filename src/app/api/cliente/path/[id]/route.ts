import AuthService from "@/modules/auth/services/auth-service";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const { id } = params;
    const sessionData = await AuthService.sessionUser();
    const session = sessionData?.data;

    if (!session) {
      console.error("Usuário não autenticado. Token ausente.");
      return NextResponse.json(
        { error: true, message: "Usuário não autenticado." },
        { status: 401 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cliente/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(body)
      }
    );
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: true, message: error, data: null },
      { status: 500 }
    );
  }
}

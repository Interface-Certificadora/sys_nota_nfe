import AuthService from "@/modules/auth/services/auth-service";
import { ApiResponse } from "@/types/apiResponse.type";
import { JWTPayload } from "jose";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = params;

    if (!id) {
      throw new Error("ID não informado");
    }

    const session: ApiResponse<JWTPayload> = await AuthService.sessionUser();

    if (session.error) {
      throw new Error("sessão nao encontrada");
    }

    const sessionPayload: JWTPayload | null = session.data;

    if (!sessionPayload) {
      throw new Error("token nao encontrada");
    }

    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionPayload.token}`
      }
    });

    if (!req.ok) {
      throw new Error("Erro ao deletar o usuario");
    }

    return NextResponse.json(
      {
        error: false,
        message: "Usuário deletado com sucesso",
        data: null
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, message: JSON.stringify(error), data: null },
      { status: 500 }
    );
  }
}

import AuthService from "@/modules/auth/services/auth-service";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    try {
        const body = await request.json();
        console.log("Dados recebidos no PATCH:", body);

        const { id } = params;
        const sessionData = await AuthService.sessionUser();

        if (!sessionData || !sessionData.data) {
            console.error("Usuário não identificado, token ausente");
            return NextResponse.json({
                error: true,
                message: "Usuário não está autenticado"
            }, { status: 401 });
        }

        const session = sessionData.data;

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/parceiro/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro ao atualizar parceiro:", errorData);

            return NextResponse.json({
                error: true,
                message: errorData.message || "Erro ao atualizar informações do parceiro"
            }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.error("Erro inesperado no PATCH:", error);

        return NextResponse.json({
            error: true,
            message: "Erro ao atualizar informações do parceiro",
            details: error instanceof Error ? error.message : error
        }, { status: 500 });
    }
}

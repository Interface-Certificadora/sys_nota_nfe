import AuthService from "@/modules/auth/services/auth-service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const sessionData = await AuthService.sessionUser();
        const session = sessionData?.data;
        body.cpf = body.cpf.replace(/\D/g, "");

        if (!session) {
            console.error("Usuário não identificado, token está ausente");
            return NextResponse.json(
                { error: true, message: "Usuário não está autenticado" },
                { status: 401 }
            );
        }

        if (!body.nome || !body.cpf || !body.telefone || !body.chave_pix || !body.valor || !body.email) {
            return NextResponse.json(
                { error: true, message: "Todos os campos são obrigatórios, confirme se todos foram preenchidos corretamente" },
                { status: 400 }
            );
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/parceiro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
            body: JSON.stringify(body),
        });
        console.log(response)

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(
                { error: true, message: errorData.message || "Erro ao cadastrar parceiro, verifique se todos os campos foram preenchidos corretamente" },
                { status: response.status }
            );
        }

        return NextResponse.json(
            { error: false, message: "Parceiro cadastrado com sucesso" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Erro no servidor:", error);
        return NextResponse.json(
            { error: true, message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}

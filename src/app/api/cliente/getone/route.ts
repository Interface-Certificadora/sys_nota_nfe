import AuthService from "@/modules/auth/services/auth-service";
import { NextRequest, NextResponse } from "next/server";

export async function GETONE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const sessionData = await AuthService.sessionUser();
        const session = sessionData?.data;

        if (!session || !session.token) {
            console.error("Usuário não autenticado. Token ausente.");
            return NextResponse.json(
                { error: true, message: "Usuário não autenticado." },
                { status: 401 }
            );
        }

        
        const userId = params.id;
        if (!userId) {
            return NextResponse.json(
                { error: true, message: "ID do usuário não fornecido." },
                { status: 400 }
            );
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cliente/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados do cliente: ${response.statusText}`);
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        return NextResponse.json(
            { error: true, message: "Erro interno ao buscar usuário.", data: null },
            { status: 500 }
        );
    }
}

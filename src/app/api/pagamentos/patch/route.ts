import AuthService from "@/modules/auth/services/auth-service";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
    try {
        const session = await AuthService.sessionUser();

        if (session.error) {
            return NextResponse.json(
                { error: true, message: "Sessão nao encontrada" },
                { status: 401 }
            );
        }

        if (!session.data || !session.data.token) {
            return NextResponse.json(
                { error: true, message: "Token nao encontrado" },
                { status: 401 }
            );
        }

        const { id, ...itens } = await req.json();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pagamento/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.data.token}`,
            },
            body: JSON.stringify({...itens}),
        });
        const data = await response.json();
        console.log("🚀 ~ PATCH ~ data:", data)
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
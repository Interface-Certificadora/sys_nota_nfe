import AuthService from "@/modules/auth/services/auth-service";
import {  NextResponse } from "next/server";

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    
    try {
        const { id } = params;
        const sessionData = await AuthService.sessionUser();
        const session = sessionData?.data;


        console.log("hello")
        if (!session) {
            console.error("Usuário não autenticado. Token ausente.");
            return NextResponse.json(
                { error: true, message: "Usuário não autenticado." },
                { status: 401 }
            );
        }

        if (!id) {
            return NextResponse.json(
                { error: true, message: "ID do usuário não fornecido." },
                { status: 400 }
            );
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cliente/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
           
        });


        const data = await response.json();
        return NextResponse.json(data, { status: 200 });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json(
            { error: true, message: "Erro interno ao buscar usuário.", data: null },
            { status: 500 }
        );
    }
}

import AuthService from "@/modules/auth/services/auth-service";
import { error } from "console";
import { NextResponse } from "next/server";

export async function DELETE(request: Request,
    { params }: { params: { id: string } }) {

    try {
        const { id } = params;
        const sessionData = await AuthService.sessionUser();
        const session = sessionData.data;

        if (!session) {
            console.error("usuario não identificado, token está ausente");
            return NextResponse.json({
                error: true,
                message: "usuario não esta autenticado"
            },
                {
                    status: 401
                }
            );
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/parceiros/${id}`, {
            method: "DELETE",
            headers: {
                "content-Type": "application/json",
                "Authorization": `beared ${session.token}`,
            },
        });

        if (!response.ok) {

            const errorData = await response.json();
            throw new error(errorData.message);
        }

    } catch (error) {

        return NextResponse.json({
            error: true,
            message: error || "erro ao excluir parceiro",
            staus: 500,
        });

    }

}
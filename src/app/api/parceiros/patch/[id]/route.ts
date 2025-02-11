import AuthService from "@/modules/auth/services/auth-service";

import { NextResponse } from "next/server";

export async function PATCH(request: Request,
    { params }: { params: { id: string } }) {

    try {
        const body = await request.json();
        console.log(body);
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


        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/parceiro/${id}`, {
            method: "PATCH",
            headers: {
                "content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
            body: JSON.stringify(body),
        });


        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data, { status: 200 });
        }
    } catch (error) {

        return NextResponse.json({
            error: true,
            message: error || "erro ao atualizar informaçoes do parceiro",
            staus: 500,
        });

    }

}
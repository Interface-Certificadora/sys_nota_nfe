import AuthService from "@/modules/auth/services/auth-service";
import { NextResponse } from "next/server";

export async function GET(request: Request,
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

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/parceiro/${id}`, {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
            
        });

        console.log(response)

        if (response.ok) {
            const data = await response.json();
            return NextResponse.json(data, { status: 200 })
        }

    } catch (error) {

        return NextResponse.json({
            error: true,
            message: error || "erro ao achar parceiro",
            staus: 500,
        });

    }

}
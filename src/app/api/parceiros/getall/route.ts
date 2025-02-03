import AuthService from "@/modules/auth/services/auth-service";
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const sessionData = await AuthService.sessionUser();
        const session = sessionData.data;

        if (!session || !session.token) {
            console.error("Usuário não autenticado. Token ausente.");
            return;
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/parceiros`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
        });
        
        const data = await response.json();
        return NextResponse.json(data,{status: 200})
    } catch (error) {
        return NextResponse.json(
            { error: true, message: error, data: null },
            { status: 500 }
        )
    }
}



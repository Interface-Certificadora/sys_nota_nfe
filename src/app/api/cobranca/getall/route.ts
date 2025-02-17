import AuthService from "@/modules/auth/services/auth-service"
import { NextResponse } from "next/server"

export async function GET(){
    try{

        const session = await AuthService.sessionUser()

        const sessionData = session.data

        if(!sessionData || !sessionData.token){
            return NextResponse.json({error: true, message: "Usuário não autenticado. Token ausente.", data: null}, {status: 401})
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cobranca`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionData.token}`,
            }
        })
        const data = await response.json()
        return NextResponse.json(data, {status: 200})
    }catch(error){
        return NextResponse.json({error: true, message: error, data: null}, {status: 500})
    }
} 
import AuthService from "@/modules/auth/services/auth-service"
import { NextResponse } from "next/server"


export async function PATCH(request: Request, {params}: { params : {id : string}}) {
    try{
        const { id } = params
        
        const session = await AuthService.sessionUser()

        if(session.error){
            return NextResponse.json({
                error: true,
                message: "Sessao nao encontrada",
                data: null
            }, {status: 401})
        }

        const sessionPayload = session.data

        if(!sessionPayload){
            return NextResponse.json({
                error: true,
                message: "Token nao encontrado",
                data: null
            }, {status: 401})
        }

        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/reset/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionPayload.token}`
            }
        })

        if(!req.ok){
            return NextResponse.json({
                error: true,
                message: "Erro ao resetar senha",
                data: null
            }, {status: 500})
        }

        const res = await req.json()
        console.log("🚀 ~ PATCH ~ res:", res)

        return NextResponse.json({
            error: false,
            message: "Senha resetada com sucesso",
            data: null
        }, {status: 200})
        
    }catch{
        return NextResponse.json({
            error: true,
            message: "Erro ao resetar senha",
            data: null
        }, {status: 500})
    }
}
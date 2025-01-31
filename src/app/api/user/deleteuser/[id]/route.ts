import AuthService from "@/modules/auth/services/auth-service"
import { ApiResponse } from "@/types/apiResponse.type"
import { JWTPayload } from "jose"
import { NextResponse } from "next/server"


export async function DELETE(request: Request, {params}: {params: {id: number}}) { 
    try{

        const { id } = params

        if(!id){
            throw new Error('ID não informado')
        }

        const session : ApiResponse<JWTPayload> = await AuthService.sessionUser()

        if(session.error){
            return {error: true, message: session.message, data: null}
        }

        const sessionPayload : JWTPayload | null = session.data

        if(!sessionPayload){
            return {error: true, message: "Nenhuma sessão encontrada", data: null}
        }

        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionPayload.token}`
            }
        })
        const res = await req.json()

        if(!req.ok){
            return NextResponse.json({error: true, message: res.message, data: null}, {status: 500})
        }

        return NextResponse.json(
            {
              error: false,
              message: res.message,
              data: null
            },
            { status: 200 }
          );
        
    }catch{
        return NextResponse.json(
            { error: true, message: "Erro ao deletar o usuario", data: null },
            { status: 500 })
    }

}
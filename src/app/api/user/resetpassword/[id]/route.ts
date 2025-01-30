import { NextResponse } from "next/server"


export async function PATCH(request: Request, {params}: { params : {id : string}}) {
    try{
        const { id } = params
        console.log("🚀 ~ PATCH ~ id:", id)
        
    }catch{
        return NextResponse.json({
            error: true,
            message: "Erro ao resetar senha",
            data: null
        }, {status: 500})
    }
}
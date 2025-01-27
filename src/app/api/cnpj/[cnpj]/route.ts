import { NextResponse } from "next/server"

export async function GET(request: Request, {params}: { params : {cnpj : string}}) {
    try{
        const {cnpj} = params
        if (!cnpj){
            throw new Error('CNPJ Não Informado')
        }
        
        const req = await fetch(`https://publica.cnpj.ws/cnpj/${cnpj}`)
        
        if(!req.ok){
            throw new Error('CNPJ Não Encontrado')
        }

        const res = await req.json()

        return NextResponse.json(
            {
              error: false,
              message: "CNPJ encontrado",
              data: res
            },
            { status: 200 }
          );
    }catch(error){
        return NextResponse.json(
            { error: true, message: error, data: null },
            { status: 500 })
    }   
}
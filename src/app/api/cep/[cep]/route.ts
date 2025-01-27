'use server'

import { NextResponse } from "next/server"

export async function GET(request: Request, {params}: { params : {cep : string}}) {
    try{
        const {cep} = params
        if (!cep){
            throw new Error('CEP Não Informado')
        }
        
        const req = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        
        if(!req.ok){
            throw new Error('CEP Não Encontrado')
        }

        const res = await req.json()

        return NextResponse.json(
            {
              error: false,
              message: "CEP encontrado",
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
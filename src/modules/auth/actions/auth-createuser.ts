/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import AuthService from "../services/auth-service"
import { NextApiResponse } from "next"
import { ApiResponse } from "@/types/apiResponse.type"
import { JWTPayload } from "jose"

export default async function createUser(_ : any, form : FormData) {
    const nome = form.get('nome')
    const email = form.get('email')
    const password = form.get('password')
    const confirmpassword = form.get('confirmpassword')
    
    if (password !== confirmpassword){
        return {error:true , message: "Senhas nao conferem", data: null}
    }

    const data = {
        name: nome,
        email: email,
        password: password,
    }

    const session : ApiResponse<JWTPayload> = await AuthService.sessionUser()

    if(session.error){
        return {error: true, message: session.message, data: null}
    }
    const sessionToken : JWTPayload | null = session.data
    
    if(!sessionToken){
        return {error: true, message: "Nenhuma sessão encontrada", data: null}
    }

    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionToken.token}`
        },
        body: JSON.stringify(data)
    })
    
    if(!req.ok){
        return {error: true, message: req.statusText, data: null}
    }
    const res : NextApiResponse = await req.json()


    return{
        error: false,
        message: "Usuario criado com sucesso",
        data: res
    }

}
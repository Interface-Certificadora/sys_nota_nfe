'use server'

import AuthService from "../services/auth-service"


export default async function login(formData : FormData) {
    const emailForm = formData.get('email') as string
    const password = formData.get('password') as string

    const data = {
        email: emailForm,
        password: password
    }

    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const res = await req.json()
    const {id, name, email} = res.user 
    const token = res.token

    if(!id || !name || !email|| !token){
        return { error: true, message: "Usuario ou senha incorretos.", data: null };
    }

    const dataUser = {
        id: id,
        name: name,
        email: email,
        token: token
    }

    await AuthService.createSessionToken(dataUser)
    
    return { error: false, message: "", data: dataUser };    
}

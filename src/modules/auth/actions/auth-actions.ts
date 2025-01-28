'use server'

import AuthService from "../services/auth-service"

async function createAccount(formData : FormData) {
    console.log(formData)
    
}

async function login(formData : FormData) {
    console.log("🚀 ~ login ~ formData:", formData)
    const email = formData.get('email') as string
    console.log("🚀 ~ login ~ email:", email)
    const password = formData.get('password') as string
    console.log("🚀 ~ login ~ password:", password)

    const req = await fetch(``, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
    const res = await req.json()

    if(!res.id || !res.token || !res.name){
        return alert('Usuário não encontrado')
    }

    await AuthService.createSessionToken(res)
    
}

const AuthActions = {
    createAccount,
    login
}

export default AuthActions
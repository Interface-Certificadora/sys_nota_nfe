"use server";

import AuthService from "../services/auth-service";
import { NextApiResponse } from "next";
import { ApiResponse } from "@/types/apiResponse.type";
import { JWTPayload } from "jose";

export default async function createUser(_: any, form: FormData) {
    const nome = form.get("nome") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const confirmpassword = form.get("confirmpassword") as string;

    if (!nome || !email || !password || !confirmpassword) {
        return { error: true, message: "Todos os campos são obrigatórios.", data: null };
    }

    if (password !== confirmpassword) {
        return { error: true, message: "As senhas não conferem.", data: null };
    }

    const data = {
        name: nome,
        email: email,
        password: password,
    };

    const session: ApiResponse<JWTPayload> = await AuthService.sessionUser();

    if (session.error) {
        return { error: true, message: session.message, data: null };
    }

    const sessionToken: JWTPayload | null = session.data;

    if (!sessionToken) {
        return { error: true, message: "Nenhuma sessão encontrada.", data: null };
    }

    try {
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionToken.token}`,
            },
            body: JSON.stringify(data),
        });

        if (!req.ok) {
            const errorData = await req.json();
            return { error: true, message: errorData.message || "Erro desconhecido ao cadastrar.", data: null };
        }

        const res: NextApiResponse = await req.json();

        return {
            error: false,
            message: "Usuário criado com sucesso!",
            data: res,
        };
    } catch (error: any) {
        return { error: true, message: error.message || "Erro inesperado ao processar o cadastro.", data: null };
    }
}

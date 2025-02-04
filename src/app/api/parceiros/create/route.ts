import AuthService from "@/modules/auth/services/auth-service";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {

        const body = await request.json();
        const sessionData = await AuthService.sessionUser();
        const session = sessionData.data;

        if (!session) {
            console.error("usuario não identificado, token está ausente");
            return NextResponse.json({
                error: true,
                message: "usuario não esta autenticado"
            },
                {
                    status: 401
                }
            );
        }

        console.log(body);



        if (!body.nome || !body.cpf || !body.telefone || !body.chave_pix || !body.valor || !body.email) {

            return NextResponse.json(
                {
                    error: true,
                    message: "Todos os campos são Obrigatotios, confirme se todos os campos foram preenchidos corretamente"
                },
                {
                    status: 402
                }
            );
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/parceiro`, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
            body: JSON.stringify(body),
        });
        console.log(response);

        if (!response.ok) {


            const errorData = await response.json();
            throw new error(errorData.message);

        }

        NextResponse.json({
            sucess: true,
            message: "parceiro cadastrado com sucesso",
            status: 201
        }
        );


    } catch (error) {

        return NextResponse.json({
            error: true,
            message: error || "erro ao criar parceiro",
            staus: 500,
        });

    }

}
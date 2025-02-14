/* eslint-disable @typescript-eslint/no-explicit-any */

'use server'

import AuthService from "../services/auth-service"

export default async function createClient(_: any, form: FormData) {
    const cnpj = form.get('cnpj') as string
    const ie = String(form.get('inscestadual')) as string
    const razaosocial = form.get('razaosocial') as string
    const fantasia = form.get('fantasia') as string
    const logo = form.get('logo') as string
    const cliente = form.get('cliente') as string
    const telefone = form.get('telefone') as string
    const telefone2 = form.get('telefone2') as string
    const email = form.get('email') as string
    const cep = form.get('cep') as string
    const cidade = form.get('cidade') as string
    const uf = form.get('uf') as string
    const bairro = form.get('bairro') as string
    const rua = form.get('rua') as string
    const numero = form.get('numero') as string
    const complemento = form.get('complemento') as string
    const serieultimanota = form.get('serieultimanota') as string
    const numeroultimanota = form.get('numeroultimanota') as string
    const comissao = Boolean(form.get('comissao')) as boolean
    const valorcomissao = Number(form.get('valorcomissao')) as number
    const valor = Number(form.get('valor')) as number
    const observacao = form.get('observacao') as string
    const contador = form.get('contador') as string
    const whatsappcontador = form.get('whatsappcontador') as string
    const vencicertificado = form.get('vencicertificado') as string
    const plano = form.get('plano') as string
    const situacaotributaria = form.get('situacaotributaria') as string
    const justificativa = form.get('justificativa') as string
    const user = cnpj as string
    const senha = "1234" as string
    const url = `www.${cnpj}.notanfe.com.br` as string
    const parceiro_id = form.get('parceiro_id')
    console.log("🚀 ~ createClient ~ parceiro_id:", parceiro_id)

    const data = {
        justificativa: justificativa,
        vencicertificado: vencicertificado,
        observacao: observacao,
        valorcomissao: valorcomissao,
        comissao: comissao,
        numeroultimanota: numeroultimanota,
        complemento: complemento,
        serieultimanota: serieultimanota,
        numero: numero,
        rua: rua,
        bairro: bairro,
        uf: uf,
        cidade: cidade,
        cep: cep,
        telefone2: telefone2,
        logo: logo,
        cliente: cliente,
        fantasia: fantasia,
        cnpj: cnpj.replace(/\D/g, ''),
        ie: ie,
        razaoSocial: razaosocial,
        telefone: telefone,
        email: email,
        valor: valor,
        plano: plano,
        user: user,
        password: senha,
        dominio: url,
        contador: contador,
        tel_contador: whatsappcontador,
        situacao: situacaotributaria,
        parceiro_id: parceiro_id ? Number(parceiro_id) : null,
    }

    
    const sessionData = await AuthService.sessionUser();
    const session = sessionData.data;


    if (!session) {
        return {
            error: true,
            message: "nao possui sessão, faça login para criar o cliente",
            data: null
        }
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cliente`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session.token}`,
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        console.log("🚀 ~ createClient ~ responseData:", responseData)

        if (!response.ok) {
            return { error: true, message: responseData.message || "Erro ao criar cliente" };
        }

        return { success: true, message: "Cliente criado com sucesso!" };
    } catch (error: any) {
        console.error("Erro ao criar o cliente:", error);
        return { error: true, message: error.message || "Erro inesperado" };
    }

}


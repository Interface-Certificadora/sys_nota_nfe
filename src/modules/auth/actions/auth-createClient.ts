
'use server'

import AuthService from "../services/auth-service"

export default async function createClient(_: any, form: FormData) {
    const cnpj = form.get('cnpj') as string
    const inscestadual = Number(form.get('inscestadual')) as number
    const razaosocial = form.get('razaosocial') as string
    const fantasia = form.get('fantasia') as string
    const logo = form.get('logo') as string
    const cliente = form.get('cliente') as string
    const whatsapp = form.get('whatsapp') as string
    const telefone = form.get('telefone') as string
    const email = form.get('email') as string
    const cep = form.get('cep') as string
    const cidade = form.get('cidade') as string
    const uf = form.get('uf') as string
    const bairro = form.get('bairro') as string
    const rua = form.get('rua') as string
    const numero = Number(form.get('numero')) as number
    const complemento = form.get('complemento') as string
    const serieultimanota = form.get('serieultimanota') as string
    const numeroultimanota = form.get('numeroultimanota') as string
    const comissao = Boolean(form.get('comissao')) as boolean
    const valorcomissao = Number(form.get('valorcomissao')) as number
    const situacao = Boolean(form.get('situacao')) as boolean
    const valor = Number(form.get('valor')) as number
    const observacao = form.get('observacao') as string
    const contador = form.get('contador') as string
    const whatsappcontador = form.get('whatsappcontador') as string
    const vencicertificado = form.get('vencicertificado') as string


    const situacaotributaria = form.get('situacaotributaria') as string
    const justificativa = form.get('justificativa') as string
    const usersenha = `${cnpj} / 1234` as string
    const url = `www.${cnpj}.notanfe.com.br` as string

    const data = {
        cnpj,
        inscestadual,
        razaosocial,
        fantasia,
        logo,
        cliente,
        whatsapp,
        telefone,
        email,
        cep,
        cidade,
        uf,
        bairro,
        rua,
        numero,
        complemento,
        serieultimanota,
        numeroultimanota,
        comissao,
        valorcomissao,
        situacao,
        valor,
        observacao,
        contador,
        whatsappcontador,
        vencicertificado,
        situacaotributaria,
        justificativa,
        usersenha,
        url
    }
    const sessionData = await AuthService.sessionUser();
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cliente`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionToken.token}`
            },
            body: JSON.stringify(AuthService.sessionUser),
        });
        const res = await response.json();
        console.log(res);

    } catch (error: any) {
        return { success: false, error: error.message || "ta errado isso ai" };
    }
}


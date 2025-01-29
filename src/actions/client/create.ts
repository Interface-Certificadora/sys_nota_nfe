/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { data } from "framer-motion/client"
import { headers } from "next/headers"

export default async function CreateClient(_ : any,form: FormData) {
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
    const rua = form.get('rua')as string
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
    // Upload doc/ file
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
}

const response = await fetch("http://192.168.0.3:3036/cliente", {
    method: "POST",
    headers:{
        "content-type": "application.json"
    },
    body: JSON.stringify(data),
});
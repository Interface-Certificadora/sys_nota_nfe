/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
export default async function CreateClient(_ : any,form: FormData) {
    const cnpj = form.get('cnpj')
    const inscestadual = form.get('inscestadual')
    const razaosocial = form.get('razaosocial')
    const fantasia = form.get('fantasia')
    const logo = form.get('logo')
    const cliente = form.get('cliente')
    const whatsapp = form.get('whatsapp')
    const telefone = form.get('telefone')
    const email = form.get('email')
    const cep = form.get('cep')
    const cidade = form.get('cidade')
    const uf = form.get('uf')
    const bairro = form.get('bairro')
    const rua = form.get('rua')
    const numero = form.get('numero')
    const complemento = form.get('complemento')
    const serieultimanota = form.get('serieultimanota')
    const numeroultimanota = form.get('numeroultimanota')
    const comissao = form.get('comissao')
    const valorcomissao = form.get('valorcomissao')
    const situacao = form.get('situacao')
    const valor = form.get('valor')
    const observacao = form.get('observacao')
    const contador = form.get('contador')
    const whatsappcontador = form.get('whatsappcontador')
    const vencicertificado = form.get('vencicertificado')
    // Upload doc/ file
    const situacaotributaria = form.get('situacaotributaria')
    const justificativa = form.get('justificativa')
    const usersenha = `${cnpj} / 1234`
    const url = `www.${cnpj}.notanfe.com.br`

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
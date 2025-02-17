export interface Cobrancas {
    id: number
    cliente: ClienteCobranca
    valor: number
    venc: string
    current: string
    status: boolean
    link_boleto: string
    obs: string
    createdAt: string
    updatedAt: string
}

export interface ClienteCobranca {
    id: number
    cliente: string
}

export interface ItemCobrancas {
    id: number,
    nomecliente: string,
    status: boolean,
    venc: string,
    obs: string,
    valor: number,
    link_boleto: string
}
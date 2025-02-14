import { Parceiro } from "./parceiro.type";

export interface Pagamentos{
        id: number;
        parceiroid: number;
        valor: number;
        venc: string;
        current: string;
        status: boolean
        createdAt: string;
        updatedAt: string;
        parceiro: Parceiro
        nome: string;
        data: string;
}

export interface ItemPagamentos {
    id: number;
    nomeparceiro: string;
    banco: string;
    chave_pix: string;
    cpf: string;
    valor: number;
    status: boolean;
}
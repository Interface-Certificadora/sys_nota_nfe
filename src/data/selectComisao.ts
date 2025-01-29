
export type Comissao = {
    label: string;
    value: boolean;
}

export type Plano = {
    label: string;
    value: string;
}

export const ComissaoOptions : Comissao[] = [
    {
        label: 'Com comissão',
        value: true
    },
    {
        label: 'Sem comissão',
        value: false
    }
]

export const planoOptions: Plano[] = [
    {
        label: 'Plano Simples',
        value: 'Plano 1'
    },
    {
        label: 'Plano Pro',
        value: 'Plano2'
    }
]
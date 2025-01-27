
export type Comissao = {
    label: string;
    value: boolean;
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
import { JWTPayload } from "jose";
import { ReactNode } from "react";


export interface UserSession {
    id: number;
    name: string;
    email: string;
    token: JWTPayload;
    exp: number
}

export interface UserList {
    [x: string]: ReactNode;
    cpf: ReactNode;
    chave_pix: ReactNode;
    telefone: ReactNode;
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    status: boolean
}
import { JWTPayload } from "jose";

export interface UserSession {
    id: number;
    name: string;
    email: string;
    token: JWTPayload;
    exp: number
}


export interface UserTable{
    id: number;
    cliente: string;
    cnpj: string;
    token: JWTPayload;
    exp: number
}
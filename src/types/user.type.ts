import { JWTPayload } from "jose";

export interface UserSession {
    id: number;
    name: string;
    email: string;
    token: JWTPayload;
    exp: number
}

export interface UserList {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    status: boolean

import { NextResponse } from "next/server";
import fetch from "node-fetch";
import { openDb } from "@/database";

interface IpifyResponse {
    ip: string;
}

export async function GET() {
    try {

        const response = await fetch("https://api.ipify.org?format=json");
        const data = (await response.json()) as IpifyResponse;
        const ip = data.ip;


        const db = await openDb();
        await db.run("INSERT INTO logs (ip, accessed_at) VALUES (?, ?)", [
            ip,
            new Date().toISOString(),
        ]);

        return NextResponse.json({
            success: true,
            message: "IP registrado com sucesso",
            ip,
        });
    } catch (error) {
        console.error("Erro ao buscar IP ou inserir no banco:", error);
        return NextResponse.json(
            { success: false, error: "Erro interno ao processar a requisição" },
            { status: 500 }
        );
    }
}

import fetch from "node-fetch";
import { openDb } from "@/database";

export async function getIPAddress() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = (await response.json()) as { ip: string };
        return data.ip;
    } catch (error) {
        console.error("Erro ao capturar IP:", error);
        throw new Error("Falha ao capturar IP");
    }
}

export async function saveIPToDatabase(ip: string) {
    try {
        const db = await openDb();
        await db.run("INSERT INTO logs (ip, accessed_at) VALUES (?, ?)", [
            ip,
            new Date().toISOString(),
        ]);
    } catch (error) {
        console.error("Erro ao salvar IP no banco:", error);
        throw new Error("Falha ao salvar IP no banco");
    }
}

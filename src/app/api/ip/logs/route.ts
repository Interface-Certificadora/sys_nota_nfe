import { NextResponse } from "next/server";
import { openDb } from "@/database";

export async function GET( ) {
    try {
        const db = await openDb();
        const logs = await db.all(`SELECT * FROM logs ORDER BY id DESC`);
        

        return NextResponse.json(logs, { status: 200 });
    } catch (error) {
        console.error("Erro ao buscar logs:", error);
        return NextResponse.json({ success: false, message: "Erro ao buscar logs" }, { status: 500 });
    }
}

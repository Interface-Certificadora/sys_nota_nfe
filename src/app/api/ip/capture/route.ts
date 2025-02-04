import { NextRequest, NextResponse } from "next/server";
import { openDb } from "@/database";

export async function POST(req: NextRequest) {
  try {
    const { ip } = await req.json(); // Pegando o IP enviado pelo client

    if (!ip) {
      return NextResponse.json({ error: "IP não fornecido" }, { status: 400 });
    }

    const db = await openDb();
    await db.run(`INSERT INTO logs (ip, accessed_at) VALUES (?, ?)`, [
      ip,
      new Date().toISOString(),
    ]);

    console.log(`IP do usuário capturado: ${ip}`);
    return NextResponse.json({ message: "IP registrado com sucesso" });
  } catch (error) {
    console.error("Erro ao capturar o IP:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

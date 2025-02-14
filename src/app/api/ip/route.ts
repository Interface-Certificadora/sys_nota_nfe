import { NextResponse } from "next/server";
import { getIPAddress, saveIPToDatabase } from "@/modules/auth/services/ipService";

export async function GET() {
    try {
        const ip = await getIPAddress();
        await saveIPToDatabase(ip);

        return NextResponse.json({
            success: true,
            message: "IP registrado com sucesso",
            ip,
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

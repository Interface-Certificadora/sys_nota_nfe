import AuthService from "@/modules/auth/services/auth-service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as Blob | null;
        const metadataJSON = formData.get("metadata") as string | null;

        if (!file || !metadataJSON) {
            return NextResponse.json(
                { error: true, message: "Arquivo ou metadados ausentes" },
                { status: 400 }
            );
        }

        const metadata = JSON.parse(metadataJSON);
        const sessionData = await AuthService.sessionUser();
        const session = sessionData?.data;
        console.log(metadata);

        if (!session) {
            console.error("Usuário não identificado, token está ausente");
            return NextResponse.json(
                { error: true, message: "Usuário não está autenticado" },
                { status: 401 }
            );
        }


        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("metadata", JSON.stringify(metadata));
        console.log(uploadData);

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/certificate/upload`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${session.token}`,
            },
            body: uploadData,
        });
        console.log(response);

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(
                { error: true, message: errorData.message || "Erro ao salvar o seu certificado" },
                { status: response.status }
            );
        }

        return NextResponse.json(
            { error: false, message: "Certificado salvo com sucesso" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Erro no servidor:", error);
        return NextResponse.json(
            { error: true, message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}

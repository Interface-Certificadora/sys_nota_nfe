import AuthService from "../services/auth-service";

export async function patchCliente(id: string) {
    try {
        const sessionData = await AuthService.sessionUser();
        const session = sessionData.data;
        if (!session) {
            return {
                error: true,
                message: "Sessão não foi encontrada",
            };
        }

        const response = await fetch(`/api/cliente/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${session.token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            return {
                error: true,
                message: "Não foi possível realizar a atualização",
            };
        }

        const res = await response.json();
        return {
            error: false,
            message: res.message || "Cliente atualizado com sucesso!",
        };
        
    } catch (error) {
        return {
            error: true,
            message: error,
        };
    }
}

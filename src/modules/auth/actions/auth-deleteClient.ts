
"use server"

import AuthService from "../services/auth-service";
export async function deleteCliente(id: string) {
    try {
        const sessionData = await AuthService.sessionUser();
        const session = sessionData.data;
        if (!session) {
            return {
                error:true,
                message:"sessão não foi encontrada",
                data:null,
            }
        }

        const response = await fetch(`/api/cliente/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${session.token}`,
                "Content-Type": "application/json",
            },
        });

        if(!response.ok){
            return {
                error:true,
                message: " Não foi possivel fazer a exclusão",
                data: null,
            }
        }
        const res = await response.json(); 


        return {
            error: false,
            message: res.message,
            data: null,
        } 
        
        
    } catch (error) {
         
        console.error("Erro ao excluir cliente:", error);
        return;
    }
}
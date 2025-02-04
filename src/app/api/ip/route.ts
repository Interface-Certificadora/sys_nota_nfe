import { Router, Request, Response } from 'express';
import fetch from 'node-fetch'; // Se necessário, instale com 'npm install node-fetch'
import { openDb } from '@/database';


interface IpifyResponse {
    ip: string;
}


const ipRouter = Router();

ipRouter.get('/', async (req: Request, res: Response) => {
    try {
        // 1. Obter IP público via ipify
        const response = await fetch('https://api.ipify.org?format=json');
        const data = (await response.json()) as IpifyResponse;
        const ip = data.ip;

        // 2. Inserir no banco de dados: IP + Data/Hora
        const db = await openDb();
        await db.run(
            `INSERT INTO logs (ip, accessed_at) VALUES (?, ?)`,
            [ip, new Date().toISOString()]
        );

        return res.json({
            success: true,
            message: 'IP registrado com sucesso',
            ip
        });
    } catch (error) {
        console.error('Erro ao buscar IP ou inserir no banco:', error);
        return res.status(500).json({ success: false, error: 'Erro interno ao processar a requisição' });
    }
});

export default ipRouter;

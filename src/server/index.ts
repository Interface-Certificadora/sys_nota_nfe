import express from "express";
import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 3000;


app.get("/api/ip", async (req, res) => {
  try {
  
    const response = await fetch("http://localhost:3000/api/ip");
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Erro ao capturar IP:", error);
    res.status(500).json({ success: false, error: "Erro ao capturar IP" });
  }
});


app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});

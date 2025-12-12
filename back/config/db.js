import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
    try {
      await mongoose.connect(MONGO_URL);
      console.log("Banco de dados conectado com sucesso!");
    } catch (error) {
      console.error("Falha ao conectar ao banco de dados!", error);
    }
}


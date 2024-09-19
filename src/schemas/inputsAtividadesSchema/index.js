import { z } from "zod";
import { inputsMotoristaSchema } from "../inputsMotoristaSchema";

export const inputsAtividadesSchema = z.record(
  z.object({
    local: z.string().min(1, "O campo local é obrigatório"),
    km: z.string().min(1, "O campo o Km é obrigatório"),
    chegada: z.string().min(5, "Valor inválido no campo chegada"),
    saida: z.string().min(5, "Valor inválido no campo saída"),
    atividade: z.string().min(1, "O campo atividade é obrigatório"),
  })
)
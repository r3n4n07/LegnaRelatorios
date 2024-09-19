import { z } from "zod";

export const inputsMotoristaSchema = z.object({
    nome: z.string().min(1, "O campo nome é obrigatório"),
    kmInicial: z.string().min(1, "O campo Km Inicial é obrigatório"),
    veiculo: z.string().min(1, "O campo veículo é obrigatório"),
    placa: z.string().min(1, "O campo placa é obrigatório")
})
import { Money } from "../types/money";

export interface MetodoPagamento {
    processarPagamento(valor: Money): void;
}
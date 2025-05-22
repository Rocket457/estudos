import { MetodoPagamento } from "../interfaces/MetodoPagamento";
import { Money } from "../types/money";

export class PagamentoBoleto implements MetodoPagamento {
    processarPagamento(valor: Money): string {
        return `Processando pagamento de ${valor.currency}${valor.amount} via Boleto.`
        // Lógica para processar o pagamento via Boleto
    }
}   
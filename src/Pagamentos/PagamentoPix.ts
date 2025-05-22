import { MetodoPagamento } from "../interfaces/MetodoPagamento"
import { Money } from "../types/money"

export class PagamentoPix implements MetodoPagamento {
    processarPagamento(valor: Money): string {
       return `Processando pagamento de ${valor.currency}${valor.amount} via Pix.`
        // Lógica para processar o pagamento via Pix
    }
}   
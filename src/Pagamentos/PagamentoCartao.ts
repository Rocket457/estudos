import { MetodoPagamento } from "../interfaces/MetodoPagamento";
import { Money } from "../types/money";

export class PagamentoCartao implements MetodoPagamento {
    processarPagamento(valor: Money): string {
        return `Processando pagamento de ${valor.currency}${valor.amount} via Cartao.`
        // Lógica para processar o pagamento via Cartao
    }
}   
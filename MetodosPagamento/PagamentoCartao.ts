import { MetodoPagamento } from "../../MetodoPagamento";

export class PagamentoCartao implements MetodoPagamento {
    processarPagamento(valor: number): void {
        console.log(`Processando pagamento de R$ ${valor} via Cartao.`);
        // Lógica para processar o pagamento via Cartao
    }
}   
import { MetodoPagamento } from "../MetodoPagamento";

export class PagamentoBoleto implements MetodoPagamento {
    processarPagamento(valor: number): void {
        console.log(`Processando pagamento de R$ ${valor} via Boleto.`);
        // Lógica para processar o pagamento via Boleto
    }
}   
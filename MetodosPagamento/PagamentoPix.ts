import { MetodoPagamento } from "../../MetodoPagamento";

export class PagamentoPix implements MetodoPagamento {
    processarPagamento(valor: number): void {
        console.log(`Processando pagamento de R$ ${valor} via Pix.`);
        // Lógica para processar o pagamento via Pix
    }
}   
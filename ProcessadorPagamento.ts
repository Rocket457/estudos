import { MetodoPagamento } from "./MetodoPagamento";

class ProcessadorPagamento {
    private metodoPagamento: MetodoPagamento

    constructor(metodoPagamento: MetodoPagamento) {
        this.metodoPagamento = metodoPagamento;
    }

    processar(valor: number): void {
        this.metodoPagamento.processarPagamento(valor);
    }   
    
}
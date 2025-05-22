import { MetodoPagamento} from "./interfaces/MetodoPagamento";
import { Money } from "./types/money";

export class ProcessadorPagamento {
    private metodoPagamento: MetodoPagamento

    constructor(metodoPagamento: MetodoPagamento) {
        this.metodoPagamento = metodoPagamento;
    }

    processar(valor: Money): void {
        return this.metodoPagamento.processarPagamento(valor);
    }   
    
}
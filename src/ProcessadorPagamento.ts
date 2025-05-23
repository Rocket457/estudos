import { MetodoPagamento} from "./interfaces/MetodoPagamento";
import { Money } from "./types/money";

export class ProcessadorPagamento {
    private metodoPagamento: MetodoPagamento

    constructor(metodoPagamento: MetodoPagamento) {
        this.metodoPagamento = metodoPagamento;
    }
    
    processar(valor: Money): void {
        if (valor.amount.lessThanOrEqualTo(0)) {
            throw new Error("Valor deve ser maior que zero.");
        }
        return this.metodoPagamento.processarPagamento(valor);
    }   
    
}
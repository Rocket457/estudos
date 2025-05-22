import { ProcessadorPagamento } from '../src/ProcessadorPagamento'
import { PagamentoCartao } from '../src/Pagamentos/PagamentoCartao'
import { Money } from '../src/types/money'
import { Decimal } from 'decimal.js'

describe('ProcessadorPagamento', () => {
  it('deve processar pagamento via Cartao corretamente', () => {
    const metodo = new PagamentoCartao()
    const processador = new ProcessadorPagamento(metodo)

    const preco: Decimal = new Decimal(100)
    const valor: Money = { amount: preco, currency: 'R$' }
    
    const resultado = processador.processar(valor)

    expect(resultado).toBe('Processando pagamento de R$100 via Cartao.')
  })
})

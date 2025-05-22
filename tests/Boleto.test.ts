import { ProcessadorPagamento } from '../src/ProcessadorPagamento'
import { PagamentoBoleto } from '../src/Pagamentos/PagamentoBoleto'
import { Money } from '../src/types/money'
import { Decimal } from 'decimal.js'

describe('ProcessadorPagamento', () => {
  it('deve processar pagamento via Boleto corretamente', () => {
    const metodo = new PagamentoBoleto()
    const processador = new ProcessadorPagamento(metodo)

    // Mock do método processarPagamento
    const preco: Decimal = new Decimal(100)
    const valor: Money = { amount: preco, currency: 'R$' }
    
    const resultado = processador.processar(valor)

    expect(resultado).toBe('Processando pagamento de R$100 via Boleto.')
  })
})

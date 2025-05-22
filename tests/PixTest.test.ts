import { ProcessadorPagamento } from '../src/ProcessadorPagamento'
import { PagamentoPix } from '../src/Pagamentos//PagamentoPix'
import { Money } from '../src/types/money'
import { Decimal } from 'decimal.js'

describe('ProcessadorPagamento', () => {
  it('deve processar pagamento via Pix corretamente', () => {
    const metodo = new PagamentoPix()
    const processador = new ProcessadorPagamento(metodo)

    const preco: Decimal = new Decimal(100)
    const valor: Money = { amount: preco, currency: 'R$' }
    
    const resultado = processador.processar(valor)

    expect(resultado).toBe('Processando pagamento de R$100 via Pix.')
  })
})

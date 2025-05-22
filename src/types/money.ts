import { Decimal } from 'decimal.js'

export type Money = {
    amount: Decimal,
    currency: string
}
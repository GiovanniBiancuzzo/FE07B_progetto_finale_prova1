import { Cliente } from './cliente';
import { StatoFattura } from './stato-fattura';

export interface Fattura {
  id: number;
  data: string;
  numero: number;
  anno: number;
  importo: number;
  stato: StatoFattura;
  cliente: Cliente;
}

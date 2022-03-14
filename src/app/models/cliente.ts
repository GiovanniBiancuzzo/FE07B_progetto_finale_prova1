//import { Comune } from './Comune';

export interface Cliente {
  id: number;
  ragioneSociale: string;
  partitaIva: number;
  tipoCliente: string;
  email: string;
  pec: string;
  telefono: string;
  nomeContatto: string;
  cognomeContatto: string;
  telefonoContatto: string;
  emailContatto: string;
  indirizzoSedeOperativa: {
    id: number;
    via: string;
    civico: number;
    cap: number;
    localita: string;
    //comune: Comune;
  };
  indirizzoSedeLegale: {
    id: number;
    via: string;
    civico: number;
    cap: number;
    localita: string;
    //comune: Comune;
  };
  dataInserimento: Date;
  dataUltimoContatto: Date;
  fatturatoAnnuale: number;
}

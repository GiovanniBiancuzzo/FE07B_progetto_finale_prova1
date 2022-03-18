export interface User {
  id: number;
  username: string;
  email: string;
  nome: string;
  cognome: string;
  roles: [{ id: number; roleName: string }];
  accessToken: string;
  tokenType: string;
}

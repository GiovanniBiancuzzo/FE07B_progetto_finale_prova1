export interface User {
  id: number;
  username: string;
  email: string;
  roles: [{ id: number; roleName: string }];
  accessToken: string;
  tokenType: string;
}


// export class User {
//   id!: number;
//   username!: string;
//   email!: string;
//   roles!: [{ id: number; roleName: string }];
//   accessToken!: string;
//   tokenType!: string;
// }

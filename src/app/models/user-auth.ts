export interface UserAuth {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}

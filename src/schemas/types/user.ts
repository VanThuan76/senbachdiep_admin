export interface ILoginedUser {
  token: string;
  user: IUser;
}
interface IUser {
  name: string;
  phone: string;
}

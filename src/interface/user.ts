export interface IRegisterData {
  email: string;
  password: string;
  username?: string;
  nickname?: string;
  sex?: number;
}

export interface IUserInfo {
  _id: string;
  email: string;
  username?: string;
  nickname?: string;
  sex: number;
}

export interface ILoginData {
  email: string;
  password: string;
}
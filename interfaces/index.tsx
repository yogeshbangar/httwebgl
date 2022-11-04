export interface IMainState {
  clientState: ClientState;
}
export interface ClientState {
  isAllModelLoaded: boolean;
}
export enum MenuItem {
  ABOUT = "About",
  HOME = "Home",
  SEND_CRYPTO = "Send Crypto",
  EXPERTISE = "EXPERTISE",
  CONTACT = "CONTACT",
}
export enum AnimType {
  BIRD = "BIRD",
  WATCH = "WATCH",
}
export interface IUser {
  _id: string;
  name?: string;
  email?: string;
}

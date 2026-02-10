export interface IMainState {
  clientState: ClientState;
}
export interface ClientState {
  isAllModelLoaded: boolean;
  counter: number;
}
export const defaultClientState: ClientState = {
  isAllModelLoaded: false,
  counter: 0,
};

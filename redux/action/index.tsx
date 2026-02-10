export enum ActionTypes {
  DID_LOAD_FIBER = "DID_LOAD_FIBER",
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
}
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const actionDeposited = (isLoaded: boolean) => ({
  type: ActionTypes.DID_LOAD_FIBER,
  payload: isLoaded,
});
export const incrementCounter = () => ({
  type: ActionTypes.INCREMENT_COUNTER,
});

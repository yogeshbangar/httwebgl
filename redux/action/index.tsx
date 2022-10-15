export const DID_LOAD_FIBER = "DID_LOAD_FIBER";
export const actionDeposited = (isLoaded: boolean) => ({
  type: DID_LOAD_FIBER,
  payload: isLoaded,
});

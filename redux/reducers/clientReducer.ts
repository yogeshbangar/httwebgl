import { UnknownAction } from "redux";
import { ClientState, defaultClientState } from "../../interfaces";
import { ActionTypes } from "../action";

const clientReducer = (
  state: ClientState = defaultClientState,
  action: UnknownAction,
): ClientState => {
  switch (action.type) {
    case ActionTypes.DID_LOAD_FIBER: {
      return {
        ...state,
        isAllModelLoaded: (action as { type: string; payload: boolean })
          .payload,
      };
    }
    case ActionTypes.INCREMENT_COUNTER: {
      return {
        ...state,
        counter: (state.counter || 0) + 1,
      };
    }
    default: {
      return state;
    }
  }
};
export default clientReducer;

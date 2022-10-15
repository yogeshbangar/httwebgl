import { AnyAction } from "redux";
import { ClientState } from "../../interfaces";
import { DID_LOAD_FIBER } from "../action";
export const defaultClientState: ClientState = {
  isAllModelLoaded: false,
};
const clientReducer = (
  state: ClientState = defaultClientState,
  action: AnyAction
): ClientState => {
  switch (action.type) {
    case DID_LOAD_FIBER: {
      return {
        ...state,
        isAllModelLoaded: action.payload,
      };
    }

    default:
      return state;
  }
};

export default clientReducer;

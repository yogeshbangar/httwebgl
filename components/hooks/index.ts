import { useSelector } from "react-redux";
import { IMainState } from "../../interfaces";

export const useIsAllModelLoadedState = () => {
  const isAllModelLoaded = useSelector(
    (state: IMainState) => state.clientState.isAllModelLoaded
  );

  return isAllModelLoaded;
};

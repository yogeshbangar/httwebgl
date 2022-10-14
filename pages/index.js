import FiberCanvas from "../components/Fiber/FiberCanvas";
import UI from "../components/UI";
import Styles from "../components/Styles";
import HTMLHeader from "../components/UI/HTMLHeader";
export default function Home() {
  return (
    <>
      <HTMLHeader />
      <FiberCanvas />
      <UI />
      <Styles />
    </>
  );
}

import Link from "next/link";
import FiberCanvas from "../components/Fiber/FiberCanvas";
import UI from "../components/UI";
import Styles from "../components/Styles";
export default function Home() {
  return (
    <>
      <FiberCanvas />
      <UI />
      <Styles />
    </>
  );
}

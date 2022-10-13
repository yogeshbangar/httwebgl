import Link from "next/link";
import FiberCanvas from "../components/Fiber/FiberCanvas";
export default function Home() {
  return (
    <>
      <FiberCanvas />
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </>
  );
}

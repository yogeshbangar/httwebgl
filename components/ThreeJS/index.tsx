import { useRouter } from "next/router";
import React from "react";
import Users from "../UI/Users";
import Particle from "./Particle";
const ThreeJSAnimation = () => {
  const router = useRouter();
  const anim = router.query.anim === 'true';
  return (
    <>
      {!anim && (
        <Users />
      )}
      <Particle />
    </>
  );
};
export default ThreeJSAnimation;

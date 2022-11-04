import FiberCanvas from "../components/Fiber/FiberCanvas";
import UI from "../components/UI";
import Styles from "../components/Styles";
import HTMLHeader from "../components/UI/HTMLHeader";
import { GetServerSideProps } from "next";
import { getIpAddressFromRequest } from "../components/util/ipAddress";
import { getGeolocation } from "../components/services/geolocation";
import { addGeoLocation } from "../components/Firebase/config";
import React from "react";
import Blockchain from "../components/UI/Blockchain";
function Home(ipAddress) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window["ipAddress"] = ipAddress;
    }
  }, []);

  return (
    <>
      <HTMLHeader />
      <FiberCanvas />
      <UI />
      <Styles />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  let geolocation = null;
  try {
    geolocation = await getGeolocation(getIpAddressFromRequest(req));
    addGeoLocation(geolocation);
  } catch (e) {
    console.error("loading failed with error: ", e);
  }
  return {
    props: { geolocation },
  };
};
export default Home;

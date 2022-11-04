import FiberCanvas from "../components/Fiber/FiberCanvas";
import UI from "../components/UI";
import Styles from "../components/Styles";
import HTMLHeader from "../components/UI/HTMLHeader";
import { GetServerSideProps } from "next";
import { getIpAddressFromRequest } from "../components/util/ipAddress";
import {
  GeoLocation,
  getGeolocation,
} from "../components/services/geolocation";
import { addGeoLocation } from "../components/Firebase/config";
import React from "react";
import { AnimType } from "../interfaces";
declare global {
  interface Window {
    geolocation: any;
  }
}
function Home({ geolocation }: { geolocation: GeoLocation }) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window["geolocation"] = geolocation;
    }
  }, []);
  return (
    <>
      <HTMLHeader />
      <FiberCanvas animationType={AnimType.WATCH} />
      <UI />
      <Styles />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  let geolocation = null;
  try {
    const ipAddress = getIpAddressFromRequest(req) as string;
    geolocation = await getGeolocation(ipAddress);
    addGeoLocation(geolocation);
  } catch (e) {
    console.error("loading failed with error: ", e);
  }
  return {
    props: { geolocation },
  };
};
export default Home;

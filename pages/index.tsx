import FiberCanvas from "../components/Fiber/FiberCanvas";
import UI from "../components/UI";
import Styles from "../components/Styles";
import HTMLHeader from "../components/UI/HTMLHeader";
import { GetServerSideProps } from "next";
import { getIpAddressFromRequest } from "../components/util/ipAddress";
function Home(ipAddress) {
  console.log(ipAddress);
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
  let ipAddress = undefined;
  try {
    ipAddress = getIpAddressFromRequest(req);
    console.log(ipAddress, "ipAddress");
    // const geolocation = await getGeolocation(ipAddress);
    // isInChina = geolocation.country_name === 'China';
  } catch (e) {
    console.error("loading isInChina failed with error: ", e);
  }
  return {
    props: { ipAddress },
  };
};
export default Home;

import axios from "axios";
import { IUser } from "../../../interfaces";
export interface GeoLocation {
  type?: string;
  country_name?: string;
  region_name?: string;
  city?: string;
  zip?: string;
  latitude?: number;
  longitude?: number;
  ip?: string;
}

export const getGeolocation = async (ip: string): Promise<GeoLocation> => {
  try {
    if (ip && ip.includes("ffff")) {
      return {};
    }
    const result = await axios.get(
      `https://api.ipstack.com/${ip}?access_key=5110837e247b8be749dee17ceb09f193`
    );
    return {
      country_name: result.data?.country_name || "undefined",
      region_name: result.data?.region_name || "undefined",
      city: result.data?.city || "undefined",
      ip: ip,
    };
  } catch (error) {
    console.error(`Failed to get geolocation data for ip with error`);
    console.error(error);
    return {};
  }
};
export const getUserList = async (): Promise<IUser[]> => {
  try {
    const result = await axios.get(`api/user`);
    return result.data;
  } catch (error) {
    console.error(`Failed to get geolocation data for ip with error`);
    console.error(error);
    return [];
  }
};

import * as Realm from "realm-web";
const REALM_APP_ID = "hututuwebgl-oiytk";
export const getAllUsers = async () => {
  const app = new Realm.App({ id: REALM_APP_ID });
  const credentials = Realm.Credentials.anonymous();
  console.log("Issue", credentials);
  try {
    const user = await app.logIn(credentials);
    return await user.functions.getAllUsers();
  } catch (err) {
    console.error("Failed to log in", err);
  }
};

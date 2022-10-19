import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, set, Database } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCdOKvh74sVAfkA7FlshgETcjf37Lmx4Do",
  authDomain: "typing-speed-25.firebaseapp.com",
  databaseURL: "https://typing-speed-25.firebaseio.com",
  projectId: "typing-speed-25",
  storageBucket: "typing-speed-25.appspot.com",
  messagingSenderId: "370387050369",
  appId: "1:370387050369:web:c2e5d900e0d8851f971280",
  measurementId: "G-7SRJQKLDT0",
};

const getDB = (): Database => {
  try {
    return getDatabase();
  } catch (e) {
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
  }
};
export const getUserCount = async () => {
  const dbRef = ref(getDB());
  const snapshot = await get(child(dbRef, `/users/`));
  if (snapshot?.val() === null) {
    set(ref(getDatabase(), "users/"), {
      count: 0,
    });
  }
  return snapshot?.val();
};

export const visitedCount = async () => {
  const result = await axios.get(
    `/api/usercount`
  );
  console.log(result);
  const val = await getUserCount();
  set(ref(getDB(), "users/"), {
    count: (val?.count || 0) + 1,
  });
  return val;
};

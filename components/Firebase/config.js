import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, child, set } from "firebase/database";
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

const init = () => {
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
};
export const getUserCount = async () => {
  init();
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `/users/`));
  if (snapshot?.val() === null) {
    set(ref(getDatabase(), "users/"), {
      count: 0,
    });
  }
  return snapshot?.val();
};

export const writeUserData = async () => {
  const val = await getUserCount();
  set(ref(getDatabase(), "users/"), {
    count: (val?.count || 0) + 1,
  });
  return val;
};

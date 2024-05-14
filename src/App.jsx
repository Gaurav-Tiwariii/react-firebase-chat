// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";
// import { useState } from "react";

// const db = getDatabase(app);

// const App = () => {
//   // Define putData function here
//   const putData = () => {
//     set(ref(db, "user/Gaurav"), {
//       id: 1,
//       name: "Gaurav",
//       age: 21,

//     });
//   };

//   return (
//     <div className='container'>
//       <h1>Firebase</h1>
//       <button onClick={putData}>Put Data</button>
//     </div>
//   );
// };

// export default App;

import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/list";
import Login from "./components/login/login";
import Notification from "./components/notification/notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useUserStore } from "../userStore";

const App = () => {

  const { currentUser,
    isLoading,
    fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid)
    });
    return () => {
      unsub();
    }
  }, [fetchUserInfo]);
  console.log(currentUser);

  if(isLoading) return <div className="loading">LOading....</div>

  return (
    <div className='container'>
      {
        currentUser ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
      <Notification />

    </div>
  )
}

export default App

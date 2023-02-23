import "./App.css";
import { useState } from "react";
import Header from "./component/header/index";
import Sidebar from "./component/sidebar";
import FilesView from "./component/filesView/FilesView";
function App() {
  const [user, setUser] = useState({
    displayName: "Sujal gautam",
    email: "sujalgautam26@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL:
      "https://i.pinimg.com/736x/66/5b/a1/665ba10a615814ffbfe0bd580be7b8c9.jpg",
  });
  return (
    <div className="App">
      <Header userphoto={user.photoURL} />
      <div className="app-main">
        <Sidebar />
        <FilesView />
      </div>
    </div>
  );
}

export default App;

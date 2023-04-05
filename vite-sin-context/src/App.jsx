import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyPage } from "./components/MyPage";
import { MyPageContext } from "./components/MyPageContext";
import { CrudApi } from "./components/CrudApi";
import { CrudProvider } from "./context/CrudContext";

function App() {
  const [count, setCount] = useState(0);
  //SIN CONTEXT
  return (
    <div>
      <h1> React Context API</h1>
      <CrudProvider>
        <CrudApi />
      </CrudProvider>

      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
